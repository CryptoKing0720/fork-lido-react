export default function AprInfo() {
  return (
    <div
      id="apr-info"
      data-track-content="true"
      data-content-name="Lido APR explanation"
      data-content-piece="Lido APR explanation section"
      className="sc-7b2d741e-0 eyWVZa"
    >
      <div className="sc-ea212a8d-0 jPEekX sc-7b2d741e-1 jZQSIw">
        <h2 className="sc-fe7ed116-0 sc-7b2d741e-2 jsPFib cVGcYn">
          Why does Lido APR differ from various liquid staking protocols?
        </h2>
        <p className="sc-2326d2d2-0 sc-7b2d741e-3 gyJOxR bgTFgS">
          The main differences between APR in various liquid staking protocols
          are formed due to the unique solutions of each protocol and approaches
          to the formation of a validator set.
        </p>
        <span className="sc-7b2d741e-4 dFJWqD">
          Here are Lido-on-Ethereum distinctive approaches on rewards:
        </span>
        <div className="sc-7b2d741e-5 foBGQi">
          <div className="sc-76c2e3df-0 bBoGvc">
            <img
              src="/static/images/ethereum-staking-info/apr-compounding.svg"
              alt=""
              className="sc-76c2e3df-4 eEJmAi"
            />
            <div className="sc-76c2e3df-1 gwuwDK">
              <h3 className="sc-76c2e3df-2 kCAUGM">Compounding</h3>
              <p className="sc-2326d2d2-0 sc-76c2e3df-3 gyJOxR ghdnSe">
                APR increases as EL rewards are got due to staking of received
                EL rewards.{/* */}{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://dune.com/queries/1288160/2275676"
                  className="sc-780575ce-13 sDJes"
                >
                  Compounding statistics
                </a>
              </p>
            </div>
          </div>
          <div className="sc-76c2e3df-0 bBoGvc">
            <img
              src="/static/images/ethereum-staking-info/apr-performance.svg"
              alt=""
              className="sc-76c2e3df-4 eEJmAi"
            />
            <div className="sc-76c2e3df-1 gwuwDK">
              <h3 className="sc-76c2e3df-2 kCAUGM">
                Performance of Lido validators
              </h3>
              <p className="sc-2326d2d2-0 sc-76c2e3df-3 gyJOxR ghdnSe">
                The better the underlying validator sets are, the more robust,
                resilient, and performant the staking protocol.{/* */}{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://operatorportal.lido.fi/operator-statistics-and-metrics"
                  className="sc-780575ce-13 sDJes"
                >
                  Operator Statistics and Metrics
                </a>
              </p>
            </div>
          </div>
          <div className="sc-76c2e3df-0 bBoGvc">
            <img
              src="/static/images/ethereum-staking-info/apr-reward-socialization-model.svg"
              alt=""
              className="sc-76c2e3df-4 eEJmAi"
            />
            <div className="sc-76c2e3df-1 gwuwDK">
              <h3 className="sc-76c2e3df-2 kCAUGM">
                Rewards socialization model
              </h3>
              <p className="sc-2326d2d2-0 sc-76c2e3df-3 gyJOxR ghdnSe">
                With Lido, you receive staking rewards within 24 hours of your
                deposit without waiting for validator activation.
              </p>
            </div>
          </div>
          <div className="sc-76c2e3df-0 bBoGvc">
            <img
              src="/static/images/ethereum-staking-info/apr-protocol-fee.svg"
              alt=""
              className="sc-76c2e3df-4 eEJmAi"
            />
            <div className="sc-76c2e3df-1 gwuwDK">
              <h3 className="sc-76c2e3df-2 kCAUGM">Protocol fee</h3>
              <p className="sc-2326d2d2-0 sc-76c2e3df-3 gyJOxR ghdnSe">
                Lido applies a 10% fee on staking rewards that are split between
                node operators and the DAO Treasury.
              </p>
            </div>
          </div>
        </div>
        <div className="sc-7b2d741e-6 kaLZsG">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.lido.fi/#protocol-apr"
            className="sc-9e0fafd8-0 sc-7b2d741e-7 lmlpeK ia-dYLE"
          >
            More info about APR
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dune.com/queries/570874/4069098"
            className="sc-9e0fafd8-0 sc-7b2d741e-7 lmlpeK eKlyyb"
          >
            <img
              src="/static/images/ethereum-staking-info/dune-logo.svg"
              alt=""
              className="sc-7b2d741e-8 bKZOva"
            />
            Explore APR on Dune
          </a>
        </div>
      </div>
    </div>
  );
}
