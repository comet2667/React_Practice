import { NavLink, Outlet } from "react-router-dom";
import '../css/common.css';
import { useEffect, useState } from "react";
import SignUp from "../pages/SignUp";

export default function NaviBar() {

    return (
        <>
            <nav className="navi">
                <NavLink to='/'>(로고)</NavLink>
                <div className="sign">
                    <NavLink to='/sign-up'>회원가입</NavLink>
                    <NavLink to='/login'>로그인</NavLink>
                </div>
            </nav>
            <main>
                <section>
                    <Outlet/>
                </section>
            </main>
        </>
    );
}