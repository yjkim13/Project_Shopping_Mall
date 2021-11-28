# Shopping Project
 ------- 
### 📣 배포
해당 웹 사이트는 heroku를 통해 배포하였습니다.
* 링크 : <https://judetravels.herokuapp.com>
 
### 🛠 사용스킬
* React
* NodeJS
* MongoDB
* Redux

## ✈ < Jude_Travel >

![LandingPage](https://user-images.githubusercontent.com/36403024/143734184-6252acfc-7c14-4936-bfc6-d4c4237a7ea1.PNG)


> Jude_Travel은 여행 상품을 판매하는 웹 사이트입니다.   
> 웹 사이트의 기능은 크게 방문자, 회원, 관리자에 따라 나뉘었습니다.
> * 관리자는 1명으로 상품 등록 및 수정과 삭제가 가능합니다.
> * 회원은 상품을 확인하고 카트에 넣을 수 있고, 카트에서 삭제할 수 있으며   
> 카트에 있는 상품에 대해 결제가 가능합니다.
> * 방문자는 해당 사이트에 판매되는 상품을 확인할 수 있지만 결제가 불가능합니다.

### 기능 설명
------
#### 🏆 [Member , 회원]
-----
##### 1. Register
 * 웹 사이트에 회원가입을 할 수 있는 기능
![RegisterPage](https://user-images.githubusercontent.com/36403024/143734537-4d790cc1-815e-4a7a-9cbd-3d95572d5340.PNG)


##### 2. Login/Logout
 * 회원가입을 통해 만든 계정을 통해 Login & Logout 할 수있는 기능
 ![LoginPage](https://user-images.githubusercontent.com/36403024/143734786-ab6e6090-1da0-464b-bbc9-3b004cda5d6e.PNG)
 
 
##### 3. Read
* 상품을 클릭했을 때, 상품의 상세페이지를 출력하는 기능
![DetailPage](https://user-images.githubusercontent.com/36403024/143735039-3878b8f5-66a6-4121-be14-365059dbe2b4.PNG)

 
##### 4. Cart
 * 상품을 직접 Cart에 담을 수 있는 기능
 ![AddToCart](https://user-images.githubusercontent.com/36403024/143734775-8c6a720f-2d40-473c-b025-de5f6e8f0bfe.PNG)
 
##### 5. Delete
 * Cart에 담은 상품을 삭제 할 수 있는 기능
  ![CartPage](https://user-images.githubusercontent.com/36403024/143734780-e1b572f8-0779-418b-9452-c253b01574a2.PNG)
 
##### 6. Order
 * Cart에 담은 상품을 주문할 수 있는 기능( Paypal 사용)
 ![Payment](https://user-images.githubusercontent.com/36403024/143734787-0ca99ae5-8fb8-4d53-a0df-1521d7b699d6.PNG)
 
##### 7. History
 * 주문한 상품에 대한 정보를 확인 할 수 있는 기능
 ![HistoryPage](https://user-images.githubusercontent.com/36403024/143734784-8c41943b-eb10-4974-a607-79c5d7dec595.PNG)

##### 8. Search
* 상품의 이름을 입력하면 상품을 검색할 수 있는 기능
![Search](https://user-images.githubusercontent.com/36403024/143734886-f1f9d8d6-5baa-4f55-82f1-b3fbd059fb49.PNG)

##### 9. Select
* 지역별로 선택하여 상품을 확인 할 수 있는 기능
* 가격별로 선택하여 상품을 확인 할 수 있는 기능 
![Select](https://user-images.githubusercontent.com/36403024/143734888-3dd38db9-9567-4107-b26a-109e7530b31f.PNG)
 
#### 🖥 [Manager , 홈페이지 관리자]
------
##### 1. Create
  * 상품 사진을 직접 업로드 할 수 있는 기능
  * 상품의 이름, 설명, 가격, 지역을 직접 입력 및 선택하여 추가하는 기능   
  ![UploadPage](https://user-images.githubusercontent.com/36403024/143734988-2708f730-fa12-439a-a142-8653e3689cb1.PNG)

##### 2. Update
* 등록된 상품의 사진을 수정할 수 있는 기능
* 등록된 상품의 이름을 수정할 수 있는 기능
* 등록된 상품의 가격을 수정할 수 있는 기능
* 등록된 상품의 설명을 수정할 수 있는 기능
* 등록된 상품의 지역을 수정할 수 있는 기능
![UpdatePage](https://user-images.githubusercontent.com/36403024/143734986-a86446a2-fd88-4e83-aa11-57d3a7b06a4a.PNG)

##### 3. Delete
* 등록된 상품을 삭제할수 있는 기능
![ManagePage](https://user-images.githubusercontent.com/36403024/143735008-1d329772-61c3-4cba-a83d-e564b4abf708.PNG)


##### 4. Search
* 상품의 이름을 입력하면 상품을 검색할 수 있는 기능

##### 6. Select
* 지역별로 선택하여 상품을 확인 할 수 있는 기능
* 가격별로 선택하여 상품을 확인 할 수 있는 기능

### 이슈 사항과 해결
-----
해당 웹사이틍 구현할 당시, Update기능과 Delete 기능 구현이 제일 힘든 부분이었습니다. Update기능과 Delete 기능을 구현하기 위해서는

1. Update 버튼을 눌렀을 때, DB에 해당 Product를 찾고 해당 Product에 대한 정보를 어떻게 불러올지
2. 정보를 불러왔다면 해당 Product의 정보를 수정을 한 다음에 DB에 어떻게 전달할지
3. Delete 버튼을 눌렀을 때, DB에 해당 Product를 찾고 어떻게 삭제할 것인지

위의 3가지가 해결과제였습니다. 그래서 우선 단계적 해결을 위해 불러오는 방법부터 진행하였습니다. 이전 Landing Page에서 DB에 저장된 Product를 
populate()를 통해 등록한 Product를 전부 불러와서 useState에 저장했던거와 같은 방법으로 ProductManagePage에 Product 정보를 불러왔습니다.

그 다음으로 UploadPage와 동일한 UI를 가진 UpdateProductPage를 만들어서 Update 버튼을 눌렀을 때 해당 페이지로 이동할 수 있게 하였습니다. 그리고 DetailProductPage에서 구현한 겻과 같이 props에 저장된 Product 정보를 통해 해당 Product의 고유 Id값을 구하였습니다. 그 다음에 그것을 변수에 저장하여 서버에 해당 Id를 가진 Producrt의 정보를 불러와서 useState에 저장하였습니다.   
그리고 저장한 정보를 Display한 후에 수정된 정보를 body 라는 변수를 선언하여 저장 하였고, submit 버튼을 눌렀을 때, axios를 통해 서버에 요청하여 findByIdAndUpdate() 를 통해 해당 Product의 Id값을 통해 Product 정보를 찾고 $set를 통해 req의 body를 넘겨줌을 통해 수정기능을 구현했습니다.

Delete 기능 또한 해당 Product의 Id를 통해 findByIdAndDelete() 로 Product를 찾아 제거함으로 Delete 기능까지 구현했습니다.

### 느낀점
-----
강의를 통해 독학으로 배운 코딩이다보니 부족한 점이 많았고, 많은 시행착오를 겪으면서 힘들었지만, 문제가 하나씩 해결되면서 성취감을 느낄 수 있었습니다. 그리고 코딩에 대한 자신감을 갖는 계기가 되었습니다. 또한, 기능을 구현했을 당시, 모르는 부분이나 구현하고싶은 부분을 검색을 통해 정보를 습득하였는데, 이를 통해 검색의 중요성과 습관화를 가질 수 있었습니다. 

### After Projcet
-----
지금 현재 이 프로젝트에 더 많은 기능을 추가하기 위해서 학습을 진행할 예정입니다. 또한, 기회가 된다면 혼자서 프로젝트를 진행하는 것뿐만 아니라 다양한 사람들과 함께 간단한 프로젝트부터 진행하고 싶습니다. 끝까지 읽어주셔서 감사합니다. 

