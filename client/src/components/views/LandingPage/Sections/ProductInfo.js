import React from 'react'
import { Descriptions, Button } from 'antd';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../_actions/user_actions'

function ProductInfo(props) {
    const dispatch = useDispatch()

    const clickHandler = () => {
        //필요한 정보를 Cart 필드에 넣어준다.
        if (props.detail.remaining === 0) {
            alert("상품의 재고가 없습니다.")
        }
        else if (props.auth.user.userData.isAuth === false) {
            if (window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?")) {
                props.history.push("/login");
            } else {

            }
        }
        else {
            dispatch(addToCart(props.detail._id))
            if (window.confirm("카트에 상품을 담았습니다. 카트 페이지로 이동하시겠습니까?")) {
                props.history.push("/user/cart");
            } else {

            }
        }
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Remaining">{props.detail.remaining}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size='large' shape='round' type='danger' onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
