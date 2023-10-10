---
sidebar_position: 1
---

# Tin báo
## Mục đích
> Chức năng này hỗ trợ NSD thực hiện tìm kiếm, thêm mới, cập nhật, xem chi tiết, xóa thông tin tiếp nhận và xử lý tin báo, tố giác tội phạm theo tài khoản người đăng nhập

> Dữ liệu nhập tại chức năng này sẽ được in ra trong sổ thụ lý nghiệp vụ điện tử **(sổ 03 và 04)**.

> **Lưu ý:** NSD có thể đăng nhập theo tài khoản và mật khẩu đã được cấp trước đây nhưng phải được bổ sung thêm quyền truy cập vào chức năng Quản lý tiếp nhận và xử lý tin báo, tố giác

## Quy trình tạo tin báo
### Bước 1: Truy cập link
NSD truy cập vào đường dẫn: **https://sothuly.vksndtc.gov.vn/#/login**
theo tài khoản và mật khẩu đã được cấp
### Bước 2: Vào chức năng
Vào phân hệ **Tin báo** --> menu **Tiếp nhận và xử lý tin báo tố giác**.

Sau khi truy cập vào chức năng, hệ thống hiển thị giao diện màn hình chính như sau: 


![Giao diện màn hình tin báo 1](/img/tb1.png)

### Bước 3: Tìm kiếm tin báo tố giác

Màn hình tìm kiếm tin báo tố giác:

![Giao diện màn hình tin báo 7](/img/tb7.png)

Để thực hiện tìm kiếm thông tin tiếp nhận và xử lý tin báo tố giác, NSD cần thực hiện các bước sau: 


Bước 1: Chọn hoặc nhập tham số các tiêu chí để tìm kiếm thông tin, chi tiết như sau: 

-	Mã tin báo 
-	Tiếp nhận từ ngày, tiếp nhận đến ngày: chọn giá trị từ bảng calendar 
hiển thị
-	Người báo tin/bị tố giác
-   Nội dung tin báo/tố giác 
-	Kết quả giải quyết: chọn hoặc nhập giá trị theo danh sách kết quả giải quyết 
-   Bộ luật: chọn giá trị từ danh sách
-   Điều luật: chọn giá trị từ danh sách
-	Trạng thái: chọn giá trị từ danh sách trạng thái và cho NSD chọn nhiều

Bước 2: Nhấn nút <Tìm kiếm> để thực hiện tìm kiếm danh sách bản ghi tiếp nhận và xử lý tin báo tố giác theo tiêu chí tìm kiếm 

Chú ý: Danh sách bản ghi có cột <Trạng thái> là tình trạng thực hiện xử lý tin báo, tố giác và được biểu diễn bằng màu sắc 

**Trạng thái Đã giải quyết**: Là trạng thái mà người sử dụng đã có Quyết định khởi tố vụ án, hoặc Quyết định không khởi tố vụ án, hoặc Phiếu chuyển tin đối với tin báo không thuộc thẩm quyền giải quyết/ kiểm sát của VKS, thể hiện màu xanh lá cây 

**Trạng thái Tạm đình chỉ**: Là trạng thái người sử dụng đã có quyết định tạm đình chỉ giải quyết, thể hiện trạng thái màu xanh nước biển. 

**Trạng thái Đã quá hạn**: Nếu ngày hiện tại > Thời hạn giải quyết tin báo mà chưa có Quyết định khởi tố, Quyết định không khởi tố, Quyết định tạm đình chỉ hoặc Phiếu chuyển tin đối với tin báo không thuộc thẩm quyền giải quyết/ kiểm sát của VKS thì được coi là quá hạn, ngày quá hạn = ngày hiện tại - thời hạn giải quyết, thể hiện trạng thái là màu đỏ 

**Trạng thái Đang giải quyết**: Là trạng thái người sử dụng đã nhập thông tin xử lý tin báo và chưa có Quyết định tạm đình chỉ, Quyết định khởi tố, quyết định không khởi tố, hoặc có Phiếu chuyển tin đối với tin báo không thuộc thẩm quyền giải quyết/ kiểm sát của VKS, thể hiện trạng thái là màu nâu. 

**Trạng thái Chưa thực hiện**: Là trạng thái khi người sử dụng mới nhập thông tin thêm mới tin báo và chưa nhập thông tin xử lý tin báo, thể hiện trạng thái là màu xanh da trời

- Ngoài ra NSD có thể tìm kiếm theo các tiêu chí khác trong mục Tìm kiếm nâng cao:

![Giao diện màn hình tin báo 8](/img/tb8.png)


### Bước 4: Thêm mới tin báo tố giác

Tại màn hình danh sách tiếp nhận và xử lý tin báo, tố giác, người dùng bấm nút  **Thêm mới**

Giao diện hiển thị như sau:

![Giao diện màn hình tin báo 2](/img/tb2.png)

![Giao diện màn hình tin báo 3](/img/tb3.png)

Để thực hiện thêm mới thông tin tiếp nhận tin báo, tố giác, NSD cần thực hiện các bước sau: 

**Người sử dụng nhập thông tin các thông tin sau:**

>Thông tin tiếp nhận: 
+ Ngày CQĐT thụ lý, giải quyết: nhập ngày CQĐT thụ lý, giải quyết 
+ Thời hạn giải quyết: nhập thời hạn giải quyết tin báo, tố giác 
+ Nguồn tin tội phạm: chọn 1 trong các loại: Tin báo, Tin tố giác, Kiến nghị khởi tố
> Thông tin người báo tin: cho phép NSD nhập thông tin người đã gửi đơn tố giác. 

>Danh sách bị tố giác: cho phép NSD nhập thông tin người bị tố giác. 

**Cụ thể:**

Thêm mới thông tin người bị tố giác 
Tại danh sách **<Danh sách người bị tố giác>**, nhấn nút **<Thêm mới>**
 
 
Hệ thống hiển thị màn hình **<Thêm mới người bị tố giác>:** 

![Giao diện màn hình tin báo 4](/img/tb4.png)

![Giao diện màn hình tin báo 5](/img/tb5.png)
  
•	Họ và tên. 

•	Các thông tin khác: tùy nhập 


TH1: Nhấn nút **<Ghi lại>**, thông tin được lưu thành công và hiển thị tại danh sách người bị tố giác 

TH2: Chọn **<Quay lại>**, thông tin thêm mới không được lưu và quay về màn hình trước đó. 

**a.	Sửa thông tin người bị tố giác**

Tại **<Danh sách người bị tố giác>**, nhấn biểu tượng **<Sửa>** tương ứng với bản ghi cần thực hiện sửa, các thông tin nhập xem hướng dẫn tương tự như màn hình **Thêm mới thông tin người bị tố giác.** 

![Giao diện màn hình tin báo 6](/img/tb6.png)
        
**b.	Xóa thông tin người bị tố giác** 
Để thực hiện chức năng xóa thông tin người bị tố giác người dùng thực hiện các bước sau: 
 Bước 1: Tại “Danh sách người bị tố giác”, nhấn biểu tượng **<Xóa>** tương ứng với bản ghi cần thực hiện xóa, hệ thống hiển thị thông báo xác nhận xóa 
 
TH1: Nhấn nút <Có>, bản ghi được xóa thành công và được xóa khỏi danh sách người bị tố giác. 

TH2: Nhấn nút <Không>, bản ghi không được xóa vẫn hiển thị tại danh sách người bị tố giác. 

**c.	Xem thông tin người bị tố giác**

Tại phần danh sách “Danh sách người bị tố giác”, nhấn biểu tượng `Xem` tương ứng với bản ghi cần thực hiện xem, hệ thống hiển thị màn hình Chi tiết người bị tố giác. 

>Quyết định cơ quan điều tra: cho phép NSD tùy nhập 

>Quyết định Viện kiểm sát: cho phép NSD tùy nhập 

>Thông tin xử lý tin báo: cho phép NSD tùy nhập

> Các hoạt động của cơ quan điều tra tiến hành: cho phép NSD tùy nhập

> Hoạt động của Viện kiểm sát: cho phép NSD tùy nhập

> Quyết định giải quyết: cho phép NSD tùy nhập

**Lưu ý:**

TH1:Nếu NSD bấm nút **<Quay lại>** hệ thống thực hiện quay lại màn hình trước đó. 
TH2: Nếu bấm nút **<Ghi lại>**, hệ thống hiển thị thông báo xác nhận. 
 
 
NSD chọn <Có> thông tin được lưu thành công, chọn **<Không>** thì quay về màn hình trước đó. 

**Chú ý:**
-	Khi nhập thông tin những trường có dấu (*) là trường bắt buộc nhập, nếu không nhập hiển thị cảnh báo “Trường bắt buộc nhập” yêu cầu người dùng không được để trống 
-	Mức bảo mật: thể hiển mức độ bảo mật thông tin tin báo tiếp được thêm mới và thông tin bản ghi được bảo mật theo cấp độ, cụ thể: 

>Cấp độ 0: Cho phép xem, sửa thông tin của người khác 

>Cấp độ 1: Cho phép xem nhưng không sửa thông tin của người khác 

>Cấp độ 2: Không cho phép xem, sửa thông tin của người khác 

### Bước 5: Cập nhật tin báo tố giác

Tại màn hình danh sách tiếp nhận và xử lý tin báo, tố giác, NSD thực hiện chức năng cập nhật. 

![Giao diện màn hình tin báo 9](/img/tb9.png)
 
Để thực hiện Cập nhật thông tin tiếp nhận tin báo tố giác, NSD cần thực hiện các bước sau: 

Bước 1: Chọn 1 bản ghi từ danh sách tiếp nhận và xử lý tin báo, tố giác. 

Bước 2: Nhấn nút <Cập nhật thông tin>, hiển thị màn hình “Cập nhật tiếp nhận tin báo, tố giác, kiến nghị khởi tố” 

Bước 3: Người sử dụng nhập thông tin cần cập nhật 
 
Bước 4: 
TH1: Nếu NSD nhấn nút <Lưu>, hiển thị thông báo xác nhận. 
 
+ NSD chọn <Có> thông tin được lưu thành công, chọn <Không> thì quay về màn hình trước đó. 

TH2: Nếu NSD nhấn nút <Quay lại>, quay về màn hình trước đó là màn hình danh sách tiếp nhận và xử lý tin báo, tố giác. 

**Chú ý:**

Khi nhập thông tin những trường có dấu (*) là trường bắt buộc nhập, nếu không nhập hiển thị cảnh báo “Trường bắt buộc nhập” yêu cầu người dùng không được để trống 

Mức bảo mật: thể hiển mức độ bảo mật thông tin tin báo tiếp được thêm mới và thông tin bản ghi được bảo mật theo cấp độ, cụ thể: 

•	Cấp độ 0: Cho phép xem, sửa thông tin của người khác 

•	Cấp độ 1: Cho phép xem nhưng không sửa thông tin của người khác 

•	Cấp độ 2: Không cho phép xem, sửa thông tin của người khác


### Bước 6: Xóa tin báo tố giác

Vào chức năng, hệ thống hiển thị màn hình giao diện chính như sau:

![Giao diện màn hình tin báo 10](/img/tb10.png)

Để thực hiện xóa thông tin tiếp nhận tin báo tố giác, NSD cần thực hiện các bước sau: 

![Giao diện màn hình tin báo 11](/img/tb11.png)

Bước 1: Chọn 1 bản ghi từ danh sách tiếp nhận tin báo, tố giác, tội phạm 

Bước 2: Nhấn nút <Xóa>, hệ thống hiển thị thông báo xác nhận xóa. 

![Giao diện màn hình tin báo 12](/img/tb12.png)

Bước 3: 
 
TH1: Nhấn nút <Có>, bản ghi chọn xóa thành công và không hiển thị tại danh sách <Tiếp nhận và xử lý tin báo, tố giác> 

TH2: Nhấn nút <Không>, bản ghi chọn không được xóa và vẫn hiển thị tại danh sách <Tiếp nhận và xử lý tin báo, tố giác> 


### Bước 7: Xem chi tiết tiếp nhận và xử lý tin báo, tố giác

Vào chức năng, hệ thống hiển thị màn hình giao diện chính như sau: 

![Giao diện màn hình tin báo 13](/img/tb13.png)
 
Để thực hiện xem chi tiết thông tin tiếp nhận tin báo tố giác, NSD cần thực hiện các bước sau:

Bước 1: Chọn 1 bản ghi từ danh sách tiếp nhận tin báo, tố giác, tội phạm 

Bước 2: Nhấn nút **<Xem chi tiết>**, hệ thống hiển thị màn hình chi tiết thông tin tiếp nhận và xử lý tin báo tố giác tương ứng.

![Giao diện màn hình tin báo 14](/img/tb14.png)

