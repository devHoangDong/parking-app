import { Text } from 'galio-framework';
import { StyleSheet, Image } from 'react-native';
import { theme } from 'galio-framework';
import React from "react";
import { Block } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { format } from 'date-fns';
import vi from 'date-fns/locale/vi'
import { View } from 'react-native';


const image = "https://i1-vnexpress.vnecdn.net/2021/06/23/chu-ky-so-1969-1624431886.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=K-5eO2a3l2rkFLQPs5H6Fw";
const image2 = "https://i-kinhdoanh.vnecdn.net/2021/11/18/Image-ExtractWord-0-Out-5943-1637227014_r_460x0.png";
export default [
  {
    title: 'TTTM Vincom Thanh Hóa',
    content: 'TTTM Vincom Thanh Hóa',
    image: 'https://www.figma.com/file/K5RFTrf9ydciHUGScgBFDL/image/87f43a30a1d0449421af13efe7003c3722618931?fuid=1110560300487813466',
    cta: 'Xem chi tiết',
    detail: () => {
      return (
        <View>
          <Block style={styles.detail}>
            <Text size={14} >
              {format(new Date(), "EEEE, do/MM/yyyy, H:mma", { locale: vi })}
            </Text>
          </Block>
          <Block style={styles.detail} bold>
            <Text size={18} bold>Ngăn chặn bán tải sản đang thế chấp bằng chữ ký số</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Hệ thống xử lý hồ sơ khép kín, sử dụng chữ ký số do Ban Cơ yếu Chính phủ cấp, đã ngăn chặn nhiều vụ làm giả giấy tờ để bán tài sản chưa giải chấp.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Phòng CSGT Công an TP HCM hồi tháng 1 phát hiện 4 trường hợp làm giả, sửa thông tin trên giấy xác nhận xóa đăng ký thế chấp ôtô để làm thủ tục giải toả ngăn chặn, phục vụ việc bán xe.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Cán bộ công an đã so sánh bản cứng (giấy) do cá nhân nộp với bản mềm (file) có chữ ký số do hệ thống xử lý hồ sơ trực tuyến của Trung tâm Đăng ký giao dịch, tài sản tại TP HCM gửi qua mạng, phát hiện giả mạo - ngăn chặn được hành vi sang tên ôtô đang thế chấp.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Trung tâm Đăng ký giao dịch, tài sản tại TP HCM (Trung tâm) trực thuộc Bộ Tư pháp, có chức năng thực hiện đăng ký và cung cấp thông tin về toàn bộ tài sản bảo đảm là phương tiện giao thông cơ giới (ôtô, xe máy, sà lan, trừ tàu bay, tàu biển), phương tiện thủy nội địa, máy móc, thiết bị, vật tư... đang thế chấp tại các tổ chức tín dụng.</Text>
          </Block>
          <Block flex style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.fullImage} />
            <Text style={styles.detailImage}>Cán bộ Trung tâm Đăng ký giao dịch, tài sản tại TP HCM xử lý hồ sơ. Ảnh: Việt Anh.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Theo Tiến sĩ Nguyễn Duy Tịnh (Giám đốc Trung tâm), 4 vụ trên là giả hồ sơ đầu ra, còn các trường hợp giả văn bản đầu vào cũng diễn ra tương tự. Như hồi tháng 5, một người làm giả phiếu yêu cầu xóa đăng ký thế chấp ôtô của Ngân hàng TMCP Đại chúng Việt Nam (PVcomBank) - Chi nhánh Gia Định. Trên phiếu thể hiện ông này đã trả xong khoản vay 700 triệu đồng cho PVcomBank (thực tế chưa tất toán), yêu cầu Trung tâm xác nhận giải chấp ôtô.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Tiến sĩ Nguyễn Duy Tịnh đánh giá việc áp dụng chữ ký số và gửi nhận hồ sơ trên Internet đã tạo đột phá trong công tác của Trung tâm. Hiện, số yêu cầu đăng ký giao dịch bảo đảm qua hệ thống trực tuyến đạt hơn 90%, nộp trực tiếp tại văn phòng còn rất ít và giảm hẳn hành vi tác động xấu vào văn bản giấy như trước đây. "Đây cũng là giải pháp làm việc không tiếp xúc, an toàn trong thời dịch Covid-19 hiện nay", ông Tịnh nói.</Text>
          </Block>
        </View>
      )
    },
    horizontal: true
  },
  {
    title: 'Chung cư TECCO',
    content: 'Chung cư TECCO',
    image: 'https://s3-alpha-sig.figma.com/img/afdf/0fb1/c700ea20e3dda87db1034577de45fe0d?Expires=1655078400&Signature=SoWWhl3RX2f4l0bymIlV~uul44zztXbQzswpmuE6E0apzHZ0~U6rf9z2IiDxxx8jQPug9-rbiB79Kx-bZRzhafSojVBH0i89wNIB001AQWIQrbsAss~XbNtXzBvmysw3qCB3S3Yv9~ZPUtGkIWF9wqCCVmOZQ46AuC~dOeoC8Ma9WxNOnY6LE~xF25W27SaEd0aV1vQRteW88Yw74oeOAI0B8HKC-oFYrLUcPC5ivBexl-O8w7Mjqna4Z9Mko0zU7bg88m2O5Dfv-aKU~i-DJ6pbbqxmq9f4NMjlJRCgkSXR9lOkC325kWri~3Qdt1zHYFC-yvnkocE-hJkCo9rGcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    cta: 'Xem chi tiết',
    detail: () => {
      return (
        <SafeAreaView>
          <Block style={styles.detail}>
            <Text size={14} >
              {format(new Date(), "EEEE, do/MM/yyyy, H:mma", { locale: vi })}
            </Text>
          </Block>
          <Block style={styles.detail} bold>
            <Text size={18} bold>Ưu điểm của giao dịch điện tử qua kênh email với chữ ký số</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Nhanh chóng, tiết kiệm là những ưu điểm của dịch vụ giao dịch điện tử qua kênh email với chữ ký số mà Techcombank áp dụng cho khách hàng doanh nghiệp.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Bên cạnh những hệ lụy tiêu cực gây ra cho đời sống, kinh tế của các quốc gia, Covid-19 được xem là động lực thúc đẩy quá trình chuyển đổi số của các doanh nghiệp diễn ra mạnh mẽ hơn. Việc ứng dụng các công nghệ trong hoạt động của doanh nghiệp cũng góp phần giải quyết các vấn đề như giao dịch, tối ưu chi phí vận hành...</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Theo Giám đốc Quốc gia của Ngân hàng Thế giới (WB) tại Việt Nam - ông Ousmane Dione, Chính phủ và doanh nghiệp cần đẩy mạnh số hóa, qua đó, thúc đẩy hoạt động kinh tế quốc gia.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Mới đây, Techcombank triển khai dịch vụ giao dịch điện tử qua kênh email với chữ ký số miễn phí. Dịch vụ này giúp doanh nghiệp thực hiện giao dịch từ xa mọi lúc, mọi nơi mà không cần tới quầy; bảo mật với chứng từ điện tử, hỗ trợ giảm chi phí in ấn, lưu kho, chuyển phát cũng như cắt bớt các thao tác luân chuyển nội bộ.</Text>
          </Block>
          <Block flex style={styles.imageContainer}>
            <Image source={{ uri: image2 }} style={styles.fullImage} />
            <Text style={styles.detailImage}>Một chi nhánh của Techcombank. Ảnh: Techcombank</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Ông Hoàng Việt, Giám đốc một công ty xây dựng tại Hà Nội cho biết, sau 5 tháng tạm ngưng do dịch bệnh, mọi hoạt động của doanh nghiệp đều phải tính toán kỹ lưỡng, tối ưu quy trình vận hành, cắt giảm tối đa chi phí.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>"Với sự đồng hành của Techcombank, chúng tôi từng bước thay đổi, giảm thiểu vận hành chứng từ, chuyển các hoạt động giao dịch tài chính lên nền tảng số và lưu trữ thuận tiện. Mới đây, ngân hàng áp dụng phương thức giao dịch qua kênh email với chữ ký số càng thuận tiện hơn cho việc xử lý nhanh chóng các giao dịch mà vẫn đảm bảo an toàn, hiệu quả", ông Việt chia sẻ.</Text>
          </Block>
        </SafeAreaView>
      )
    },
  },
  {
    title: 'Vinhome Star City Thanh Hóa',
    content: 'Vinhome Star City Thanh Hóa',
    image: 'https://www.figma.com/file/K5RFTrf9ydciHUGScgBFDL/image/e847c13d94ff2704d525541b6f452f8fa3a9caa0?fuid=1110560300487813466',
    cta: 'Xem chi tiết',
    detail: () => {
      return (
        <Block>
          <Block style={styles.detail} >
            <Text>Hệ thống xử lý hồ sơ khép kín, sử dụng chữ ký số do Ban Cơ yếu Chính phủ cấp, đã ngăn chặn nhiều vụ làm giả giấy tờ để bán tài sản chưa giải chấp.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Phòng CSGT Công an TP HCM hồi tháng 1 phát hiện 4 trường hợp làm giả, sửa thông tin trên giấy xác nhận xóa đăng ký thế chấp ôtô để làm thủ tục giải toả ngăn chặn, phục vụ việc bán xe.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Cán bộ công an đã so sánh bản cứng (giấy) do cá nhân nộp với bản mềm (file) có chữ ký số do hệ thống xử lý hồ sơ trực tuyến của Trung tâm Đăng ký giao dịch, tài sản tại TP HCM gửi qua mạng, phát hiện giả mạo - ngăn chặn được hành vi sang tên ôtô đang thế chấp.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Trung tâm Đăng ký giao dịch, tài sản tại TP HCM (Trung tâm) trực thuộc Bộ Tư pháp, có chức năng thực hiện đăng ký và cung cấp thông tin về toàn bộ tài sản bảo đảm là phương tiện giao thông cơ giới (ôtô, xe máy, sà lan, trừ tàu bay, tàu biển), phương tiện thủy nội địa, máy móc, thiết bị, vật tư... đang thế chấp tại các tổ chức tín dụng.</Text>
          </Block>
          <Block flex style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.fullImage} />
            <Text style={styles.detailImage}>Cán bộ Trung tâm Đăng ký giao dịch, tài sản tại TP HCM xử lý hồ sơ. Ảnh: Việt Anh.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Theo Tiến sĩ Nguyễn Duy Tịnh (Giám đốc Trung tâm), 4 vụ trên là giả hồ sơ đầu ra, còn các trường hợp giả văn bản đầu vào cũng diễn ra tương tự. Như hồi tháng 5, một người làm giả phiếu yêu cầu xóa đăng ký thế chấp ôtô của Ngân hàng TMCP Đại chúng Việt Nam (PVcomBank) - Chi nhánh Gia Định. Trên phiếu thể hiện ông này đã trả xong khoản vay 700 triệu đồng cho PVcomBank (thực tế chưa tất toán), yêu cầu Trung tâm xác nhận giải chấp ôtô.</Text>
          </Block>
          <Block style={styles.detail} >
            <Text>Tiến sĩ Nguyễn Duy Tịnh đánh giá việc áp dụng chữ ký số và gửi nhận hồ sơ trên Internet đã tạo đột phá trong công tác của Trung tâm. Hiện, số yêu cầu đăng ký giao dịch bảo đảm qua hệ thống trực tuyến đạt hơn 90%, nộp trực tiếp tại văn phòng còn rất ít và giảm hẳn hành vi tác động xấu vào văn bản giấy như trước đây. "Đây cũng là giải pháp làm việc không tiếp xúc, an toàn trong thời dịch Covid-19 hiện nay", ông Tịnh nói.</Text>
          </Block>
        </Block>
      )
    },
  },
];
const styles = StyleSheet.create({
  detail: {
    padding: theme.SIZES.BASE,
    paddingBottom: 0
    // marginTop: 22,
    // color: "#fff",
    // backgroundColor: "rgb(210,157,80)"
  },
  imageContainer: {
    paddingTop: theme.SIZES.BASE,
    border: 'none',
    // borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  detailImage: {
    paddingTop: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE,
  },
  fullImage: {
    paddingTop: theme.SIZES.BASE,
    height: 215
  },
})