import React from 'react'
import { Free, Pro, Enterprise, Tick, Cross } from '../components/icons'

import '../assets/styles/main.scss'

export default function Home() {
  return (
    <main>
      <div className="Title Title--align-center">
        <h1>Simple, transparent pricing</h1>
        <p>No contracts. No suprise fees.</p>
      </div>
      <div className="Card">
        <div className="Card__wrapper">
          <div className="Card__item">
            <div className="Card__top">
              <div className="Card__header">
                <div className="Card__header-left">
                  <Free />
                  <h2>Free</h2>
                </div>
              </div>
              <div className="Card__desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                </p>
              </div>
              <div className="Card__fee">
                <span className="Card__fee-price">$0</span>/<span className="Card__fee-date">month</span>
              </div>
              <div className="Card__content">
                <ul className="List">
                  <li className="List__item">
                    <Tick /> <span>2 links</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Own analytics platform</span>
                  </li>
                  <li className="List__item List__item--color-gray">
                    <Cross /> <span>Chat support</span>
                  </li>
                  <li className="List__item List__item--color-gray">
                    <Cross /> <span>Mobile application</span>
                  </li>
                  <li className="List__item List__item--color-gray">
                    <Cross /> <span>Unlimited users</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Card__footer">
              <a href="#" className="Button Button--light-pink Button--full">Get Started</a>
            </div>
          </div>
          <div className="Card__item">
            <div className="Card__top">
              <div className="Card__header">
                <div className="Card__header-left">
                  <Pro />
                  <h2>Pro</h2>
                </div>
                <div className="Card__header-right">
                  <div className="Button Button--yellow Button--best-value">
                    Best Value
                  </div>
                </div>
              </div>
              <div className="Card__desc">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
              <div className="Card__fee">
                <span className="Card__fee-price">$18</span>/<span className="Card__fee-date">month</span>
              </div>
              <div className="Card__content">
                <ul className="List">
                  <li className="List__item">
                    <Tick /> <span>2 links</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Own analytics platform</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Chat support</span>
                  </li>
                  <li className="List__item List__item--color-gray">
                    <Cross /> <span>Mobile application</span>
                  </li>
                  <li className="List__item List__item--color-gray">
                    <Cross /> <span>Unlimited users</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Card__footer">
              <a href="#" className="Button Button--light-pink Button--full">Get Started</a>
            </div>
          </div>
          <div className="Card__item Card__item--bg-blue">
            <div className="Card__top">
              <div className="Card__header">
                <div className="Card__header-left">
                  <Enterprise />
                  <h2>Enterprise</h2>
                </div>
              </div>
              <div className="Card__desc">
                <p>
                  Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                </p>
              </div>
              <div className="Card__fee">
                <span>Let’s Talk</span>
              </div>
              <div className="Card__content">
                <ul className="List">
                  <li className="List__item">
                    <Tick /> <span>2 links</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Own analytics platform</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Chat support</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Mobile application</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Unlimited users</span>
                  </li>
                  <li className="List__item">
                    <Tick /> <span>Customize panel</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Card__footer">
              <a href="#" className="Button Button--light-pink Button--full">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
