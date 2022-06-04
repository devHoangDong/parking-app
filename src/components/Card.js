import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { argonTheme } from '../constants';
import { shouldUseActivityState } from 'react-native-screens';


const Card = (props) => {
  const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = props;

  const imageStyles = [
    full ? styles.fullImage : styles.horizontalImage,
    imageStyle
  ];
  const cardContainer = [styles.card, styles.shadow, style];
  const imgContainer = [styles.imageContainer,
  horizontal ? styles.horizontalStyles : styles.verticalStyles,
  styles.shadow
  ];

  return (
    <Block row={horizontal} card flex style={cardContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          /* Navigate to the Details route with params */
          navigation.navigate('ParkingDetail', {
            item: item
          });
        }}
      >
        <Block flex style={imgContainer}>
          <Image source={{ uri: item.image }} style={imageStyles} resizeMode="cover" />
        </Block>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          /* Navigate to the Details route with params */
          navigation.navigate('ParkingDetail', {
            item: item
          });
        }}
      >
        {full ? <Block flex space="between" style={styles.cardTitleContain}>
          <Text size={14} style={styles.cardTitle}>{item.title}</Text>
          <Text size={14} style={styles.cardContent}>{item.content}</Text>
          <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
        </Block>
          :
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardContent} bold>{item.content}</Text>
            <Text size={12} style={styles.cardCTA} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} italic
              onPress={() => {
                /* Navigate to the Details route with params */
                navigation.navigate('ParkingDetail', {
                  item: item
                });
              }}
            >{item.cta}</Text>
          </Block>}
      </TouchableWithoutFeedback>
    </Block >
  );
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE,
    borderWidth: 0,
    width: "100%",
    minHeight: 107,
    height: 107,
    padding: 10
  },
  cardTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: 'wrap',
    paddingBottom: theme.SIZES.BASE / 2
  },
  cardContent: {
    color: "#000",
    flex: 0,
    flexWrap: 'wrap',
    fontSize: 14,
    paddingBottom: 6
  },
  cardCTA: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 14,
    textDecorationLine: "underline",
    opacity: 0.6,
    color: "#000",
    paddingBottom: 6
  },
  cardDescription: {
    paddingBottom: theme.SIZES.BASE / 2,
    paddingTop: 0,
    paddingLeft: 22,
  },
  cardTitleContain: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',

  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card);