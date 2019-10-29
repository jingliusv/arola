import React from 'react';
import {Link} from 'gatsby';
import Title from '../inc/Title';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="how we start with arola" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus voluptates cum modi quis quos, nesciunt accusamus adipisci molestias numquam exercitationem, architecto minima nobis! Quo magnam non tempore fugit molestias dolore laboriosam vitae iusto harum et eligendi, veniam eum illo unde voluptatibus maiores veritatis deleniti temporibus aliquid! Veniam, expedita voluptatem?
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow px-4">About Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;