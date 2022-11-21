import React from 'react'
import { Link } from 'react-router-dom'
import s from "../style/landing.module.css"


const LandingPage = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.header}>Blaze App!</h1>
      <div>
        <Link to="/products">
          <button className={s.btn}>
            <span>Products!</span>
          </button>
        </Link>
        <Link to="/orders">
          <button className={s.btn}>
            <span>Orders!</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage