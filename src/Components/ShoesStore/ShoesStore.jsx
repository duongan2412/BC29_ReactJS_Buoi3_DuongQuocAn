import React, { Component } from 'react'
import ProductsLst from './Products/ProductsLst';

export default class ShoesStore extends Component {
    render() {
        return (
            <div>
                <div className="row mx-0">
                    <div className="col-md-2">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</a>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <ProductsLst></ProductsLst></div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Shop</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

