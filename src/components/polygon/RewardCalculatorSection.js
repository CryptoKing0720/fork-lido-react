export default function RewardCalculatorSection() {
  return (
    <div
      data-track-content="true"
      data-content-name="Reward Calculator - ethereum"
      data-content-piece="Rewards calculator section"
      className="sc-d0f3db68-0 cWurmY"
    >
      <h2 color="#fff" className="sc-fe7ed116-0 kRqXoS">
        Rewards Calculator
      </h2>
      <p color="#fff" className="sc-2326d2d2-0 jmGxjo">
        Calculate your staking rewards with simple calculator tool
      </p>
      <div className="sc-6c33c335-0 chHuFw">
        <div className="sc-6c33c335-1 bRoZIW">
          <div id="amount" className="sc-6c33c335-2 hdOGtH">
            Enter your amount
          </div>
          <div className="sc-6c33c335-2 hdOGtH">${/* */}34,930.19</div>
        </div>
        <div className="sc-6c33c335-3 bOsQwE">
          <div className="sc-6c33c335-4 kYHSfM">
            <img
              width={10}
              height={16}
              src="/static/images/ethereum-staking-info/eth.svg"
              alt=""
              className="sc-f838ad62-0 nrQAp"
            />
          </div>
          <input
            aria-labelledby="amount"
            className="sc-6c33c335-5 kAwrTZ"
            defaultValue={10}
          />
        </div>
        <div className="sc-6c33c335-6 lxtPu">
          <div className="sc-6c33c335-7 fPGHwZ">
            <div className="sc-6c33c335-2 hdOGtH">APR</div>
            <div className="sc-6c33c335-8 bXftqo">
              <div className="sc-6c33c335-9 eLlKeE">
                <span className="sc-6c33c335-10 bGnbCK">3.2%</span>{" "}
              </div>
              <div className="sc-6c33c335-2 sc-6c33c335-11 hdOGtH cLYmeU">
                <a href="/ethereum#apr-info">More info</a>
              </div>
            </div>
          </div>
          <div className="sc-6c33c335-7 fPGHwZ">
            <div className="sc-6c33c335-2 hdOGtH">Monthly rewards</div>
            <div className="sc-6c33c335-8 bXftqo">
              <div className="sc-6c33c335-9 guMpLK">
                <span className="sc-6c33c335-10 bGnbCK">0.027</span> {/* */}ETH
              </div>
              <div className="sc-6c33c335-2 sc-6c33c335-11 hdOGtH cLYmeU">
                $93.66
              </div>
            </div>
          </div>
          <div className="sc-6c33c335-7 fPGHwZ">
            <div className="sc-6c33c335-2 hdOGtH">Yearly rewards</div>
            <div className="sc-6c33c335-8 bXftqo">
              <div className="sc-6c33c335-9 guMpLK">
                <span className="sc-6c33c335-10 bGnbCK">0.322</span> {/* */}ETH
              </div>
              <div className="sc-6c33c335-2 sc-6c33c335-11 hdOGtH cLYmeU">
                $1,123.9
              </div>
            </div>
          </div>
        </div>
        <button className="sc-1f9429fc-0 sc-6c33c335-12 fKOoFv ffmzbp">
          Stake now
        </button>
      </div>
    </div>
  );
}
