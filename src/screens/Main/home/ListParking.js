import { Block, Text, theme } from "galio-framework";
import React, { useState } from "react";
import {
  Dimensions, ScrollView,
  StyleSheet
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import Card from '../../../components/Card';
import articles from '../../../constants/articles';

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const ListParking = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  const inputHandler = (text) => {
    let lowerCase = text.toLowerCase();
    setInputText(lowerCase);
  }
  let filteredData = articles.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.content.toLowerCase().includes(inputText)
    }
  })
  const resetSearch = () => {
    filteredData = articles;
    setInputText("");
  }
  const renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2 }}>
            {filteredData.map(article => {
              return (<Card item={article} horizontal key={`item${article.title}`} />)
            })}
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block flex center style={styles.articles}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.articles}
      // stickyHeaderIndices={[0]}
      >
        <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2 }}>
          <SearchBar
            style={{
              marginVertical: 30,
              width: '100%'
            }}
            fontColor="rgba(#c6c6c6,60%)"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            placeholder="Tìm kiếm bãi đậu"
            onChangeText={text => {
              inputHandler(text)
            }}
            onPressCancel={() => {
              resetSearch();
            }}
            onClearPress={() => resetSearch()}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE * 2 }}>
          <Text bold size={14} >
            Gần đây
          </Text>
        </Block>
        {renderCards()}
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: "#fff",
    backgroundColor: "rgb(210,157,80)"
  },
  articles: {
    width: "100%",
  },
  group: {
    width: "100%",
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
});

export default ListParking;
