import metamask from "../icons/metamask.svg";
import curve from "../icons/curve.svg";
import aave from "../icons/aave.svg";
import oneinch from "../icons/oneinch.svg";
import ledgercryptowallet from "../icons/ledgercryptowallet.svg";

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      data-track-content="true"
      data-content-name="Ethereum ecosystem"
      data-content-piece="Ethereum ecosystem section"
      className="sc-da084c26-0 jFsMpa"
    >
      <div className="sc-ea212a8d-0 jPEekX sc-da084c26-1 dvniNt">
        <h2 color="#273852" className="sc-fe7ed116-0 ckOUoJ">
          Ethereum ecosystem
        </h2>
        <p color="#7A8AA0" className="sc-2326d2d2-0 bcHUcI">
          Explore apps and services using stETH and wstETH
        </p>
        <div className="sc-da084c26-2 jSQWGv">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://metamask.io/"
            className="sc-d3b06bb2-4 iZicED sc-da084c26-3 eYeNFX"
          >
            <img src={metamask} alt="" className="sc-d3b06bb2-0 bhVIyG" />
            <div className="sc-d3b06bb2-1 kJLGKq">
              <h2 className="sc-d3b06bb2-2 jEEHkW">MetaMask</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">
                A crypto wallet &amp; gateway to blockchain apps.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://curve.fi/"
            className="sc-d3b06bb2-4 iZicED sc-da084c26-3 eYeNFX"
          >
            <img src={curve} alt="" className="sc-d3b06bb2-0 bhVIyG" />
            <div className="sc-d3b06bb2-1 kJLGKq">
              <h2 className="sc-d3b06bb2-2 jEEHkW">Curve</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">
                Use stETH or wstETH as liquidity to the respective pool to get
                more rewards.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.aave.com"
            className="sc-d3b06bb2-4 iZicED sc-da084c26-3 eYeNFX"
          >
            <img src={aave} alt="" className="sc-d3b06bb2-0 bhVIyG" />
            <div className="sc-d3b06bb2-1 kJLGKq">
              <h2 className="sc-d3b06bb2-2 jEEHkW">AAVE</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">
                Borrow tokens against your stETH, wstETH and stMATIC
                while&nbsp;retaining their staking rewards whilst stETH, wstETH
                and stMATIC is supplied as collateral.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://app.1inch.io/#/1/swap/wstETH/DAI"
            className="sc-d3b06bb2-4 iZicED sc-da084c26-3 eYeNFX"
          >
            <img src={oneinch} alt="" className="sc-d3b06bb2-0 bhVIyG" />
            <div className="sc-d3b06bb2-1 kJLGKq">
              <h2 className="sc-d3b06bb2-2 jEEHkW">1inch</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">
                Exchange, get daily staking rewards and provide liquidity with
                stETH, wstETH and stMATIC.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ledger.com/"
            className="sc-d3b06bb2-4 iZicED sc-da084c26-3 eYeNFX"
          >
            <img
              src={ledgercryptowallet}
              alt=""
              className="sc-d3b06bb2-0 bhVIyG"
            />
            <div className="sc-d3b06bb2-1 kJLGKq">
              <h2 className="sc-d3b06bb2-2 jEEHkW">Ledger crypto wallet</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">
                Stake your tokens directly from Ledger crypto wallet.
              </p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="/lido-ecosystem?networks=ethereum"
            className="sc-d3b06bb2-4 sc-d4a95eb9-0 iZicED fKRrAr"
          >
            <div className="sc-d3b06bb2-1 sc-d4a95eb9-1 kJLGKq rriDS">
              <h2 className="sc-d3b06bb2-2 sc-d4a95eb9-2 jEEHkW dMnfXC">86</h2>
              <p className="sc-d3b06bb2-3 hmFjBK">ecosystem applications</p>
            </div>
            <span className="sc-d4a95eb9-3 iCfgvY">View all</span>
          </a>
        </div>
      </div>
    </section>
  );
}
