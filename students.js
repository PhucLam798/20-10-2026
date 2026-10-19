// MSSV luôn là chuỗi, giữ nguyên cả số 0 ở đầu.
// Mỗi bạn dùng chung lời chúc ngắn, có tên người nhận riêng.
// Muốn viết riêng cho ai: thay defaultLetter(...) của bạn ấy bằng `toàn bộ bức thư`.
// Các đoạn và dấu xuống dòng trong thư sẽ được giữ nguyên.
const defaultLetter = name => `Gửi ${name},

Nhân ngày 20/10, các bạn nam lớp ĐTVT chúc bạn luôn xinh đẹp, vui vẻ và khỏe mạnh. Chúc bạn học tốt, thi cử suôn sẻ và làm được những điều mình dự định.

Mong hôm nay bạn sẽ nhận được nhiều hoa, nhiều quà và có một ngày thật vui bên bạn bè, người thân.

Các bạn nam lớp ĐTVT`;

const students = [
  { mssv: "0", name: "Cô gái ĐTVT", letter: defaultLetter("Cô gái ĐTVT") },
  {
    mssv: "26200002",
    name: "Khúc Nguyễn Minh Anh",
    letter: defaultLetter("Khúc Nguyễn Minh Anh")
  },
  {
    mssv: "26200012",
    name: "Nguyễn Ngọc Cần",
    letter: defaultLetter("Nguyễn Ngọc Cần")
  },
  {
    mssv: "26200019",
    name: "Vũ Thị Ngọc Diệp",
    letter: defaultLetter("Vũ Thị Ngọc Diệp")
  },
  {
    mssv: "26200024",
    name: "Nguyễn Thị Ánh Dương",
    letter: defaultLetter("Nguyễn Thị Ánh Dương")
  },
  {
    mssv: "26200026",
    name: "Nguyễn Thị Mỹ Duyên",
    letter: defaultLetter("Nguyễn Thị Mỹ Duyên")
  },
  {
    mssv: "26200027",
    name: "Nguyễn Hoàng Huỳnh Giao",
    letter: defaultLetter("Nguyễn Hoàng Huỳnh Giao")
  },
  {
    mssv: "26200028",
    name: "Nông Thị Thu Hằng",
    letter: defaultLetter("Nông Thị Thu Hằng")
  },
  {
    mssv: "26200054",
    name: "Cao Khánh Huyền",
    letter: defaultLetter("Cao Khánh Huyền")
  },
  {
    mssv: "26200061",
    name: "Nguyễn Mai Khanh",
    letter: defaultLetter("Nguyễn Mai Khanh")
  }
];
