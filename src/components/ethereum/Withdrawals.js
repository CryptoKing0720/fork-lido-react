export default function Withdrawals() {
  return (
    <section
      id="withdrawals"
      data-track-content="true"
      data-content-name="Withdrawals"
      data-content-piece="Withdrawals section"
      className="sc-d4ce5361-0 bQvABv"
    >
      <div className="sc-ea212a8d-0 jPEekX sc-d4ce5361-1 jbiyrL">
        <div className="sc-d4ce5361-2 iWvcGO">
          <div className="sc-d4ce5361-3 hxpTKd">
            <h2 className="sc-fe7ed116-0 sc-d4ce5361-4 jsPFib hdxgjC">
              Withdrawals are here!
            </h2>
            <h2 className="sc-fe7ed116-0 sc-d4ce5361-4 jsPFib kDVLHh">
              How does it work?
            </h2>
            <p className="sc-2326d2d2-0 sc-d4ce5361-5 gyJOxR bGjZPa">
              Users can unstake their stETH or wstETH through withdrawals. Upon
              unstaking stETH, they will receive ETH at a 1:1 ratio. When
              unstaking wstETH, the unwrapping process will take place
              seamlessly in the background.
            </p>
          </div>
          <section className="sc-d4ce5361-6 jVwHON">
            <ul className="sc-d4ce5361-8 gotVYY">
              <li>
                <span className="sc-d4ce5361-10 hdTKzy">1</span>
                <div className="sc-d4ce5361-11 kJEato">
                  <h3 className="sc-d4ce5361-7 iWffFy">Request withdrawal</h3>
                  <p className="sc-2326d2d2-0 sc-d4ce5361-5 gyJOxR dCKstp">
                    Lock your stETH/wstETH by issuing a withdrawal request. ETH
                    is sourced to fulfill the request, and then locked stETH is
                    burned, which marks the withdrawal request as claimable.
                  </p>
                </div>
              </li>
              <li>
                <span className="sc-d4ce5361-10 hdTKzy">2</span>
                <div className="sc-d4ce5361-11 kJEato">
                  <h3 className="sc-d4ce5361-7 iWffFy">Claim</h3>
                  <p className="sc-2326d2d2-0 sc-d4ce5361-5 gyJOxR dCKstp">
                    Claim your ETH after the withdrawal request has been
                    processed.
                  </p>
                </div>
              </li>
            </ul>
            <div className="sc-d4ce5361-9 dKrbWM" />
            <a
              href="https://stake.lido.fi/withdrawals"
              target="_blank"
              rel="noreferrer"
              className="sc-9e0fafd8-0 sc-d4ce5361-12 lmlpeK dbLCBR"
            >
              Go to withdrawals
            </a>
          </section>
          <section className="sc-d4ce5361-13 loYEKr">
            <div className="sc-d4ce5361-14 flgwmJ">
              <img
                src="/static/images/withdrawals/withdrawals-nft-v2.png"
                alt="Withdrawals NFT"
                className="sc-d4ce5361-15 kfGJkH"
                data-xblocker="passed"
                style={{ visibility: "visible" }}
              />
              <p className="sc-2326d2d2-0 sc-d4ce5361-5 gyJOxR glnhAH">
                Monitor request status with Lido NFT
              </p>
              <h3 className="sc-d4ce5361-16 rTCYL">
                Your withdrawal request is an NFT that can be traded or be
                helpful with the awareness of your request status
              </h3>
            </div>
            <div className="sc-d4ce5361-17 dpiceu">
              <span>👀</span>
              <p className="sc-2326d2d2-0 sc-d4ce5361-5 gyJOxR dIRNNp">
                The NFT changes when your request is ready to claim!
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
