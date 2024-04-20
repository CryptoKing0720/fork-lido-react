import arbitrum from "../cryptos/arbitrum.svg";
import optimism from "../cryptos/optimism.svg";
import base from "../cryptos/base.svg";
import zksync from "../cryptos/zksync.svg";
import mantle from "../cryptos/mantle.svg";
import linea from "../cryptos/linea.svg";
import polygon from "../cryptos/polygon.svg";
import scroll from "../cryptos/scroll.svg";

export default function L2Section() {
  return (
    <div className="sc-ea212a8d-0 jPEekX sc-90751d93-0 jBkPbU">
      <div className="sc-90751d93-1 gsRLsZ">
        <div className="sc-90751d93-2 kjdVJX">
          <div className="sc-90751d93-3 cFAHUQ">
            <img
              src={arbitrum}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <img
              src={optimism}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <img
              src={polygon}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <img src={base} alt="" className="fFSDvZ" height={44} width={44} />
            <img
              src={zksync}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <img
              src={mantle}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <img src={linea} alt="" className="fFSDvZ" height={44} width={44} />
            <img
              src={scroll}
              alt=""
              className="fFSDvZ"
              height={44}
              width={44}
            />
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#arbitrum" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#optimism" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#polygon" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#base" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#zksync" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#mantle" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#linea" />
            </svg>
            <svg className="sc-90751d93-4 fFSDvZ" height={44} width={44}>
              <use xlinkHref="#scroll" />
            </svg>
          </div>
          <h2 className="sc-90751d93-5 kXjQmC">Meet Lido on L2</h2>
          <p className="sc-90751d93-6 ckuEsp">
            Get wstETH and benefit from reduced gas fees across various DeFi
            integrations within the L2 ecosystem.
          </p>
          <a
            href="/lido-on-l2"
            className="sc-9e0fafd8-0 sc-90751d93-7 lmlpeK hVYkhK"
          >
            Learn more
          </a>
        </div>
        <img
          src="/static/images/ethereum-staking-info/l2.svg"
          alt=""
          className="sc-90751d93-8 kWNBVO"
          data-xblocker="passed"
          style={{ visibility: "visible" }}
        />
      </div>
    </div>
  );
}
