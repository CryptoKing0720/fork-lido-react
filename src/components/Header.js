import { useState } from "react";
import { NavLink } from "react-router-dom";

import Icon from "./Icon";
import { CardRow, CardColumn, CardColumnBig } from "./Card";

export default function Header(props) {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick(!click);
  };

  return (
    <header
      id="header"
      data-date={props.date}
      data-track-content="true"
      data-content-name="Header"
      className={click ? "sc-45e72c65-0 gYaPhs" : "sc-45e72c65-0 eQIJsz"}
      style={{ right: 0 }}
    >
      <div className="sc-ea212a8d-0 jPEekX sc-45e72c65-1 iFURJA">
        <div className="sc-45e72c65-2 dVfyBR">
          <NavLink aria-label="Main page" to="/">
            <Icon className="sc-45e72c65-4 gTdwsU" name="logo-new" />
          </NavLink>
        </div>
        <div
          className={click ? "sc-45e72c65-5 jdompr" : "sc-45e72c65-5 bxGQrk"}
        >
          <nav className="sc-45e72c65-6 cePrPv">
            <NavLink
              to="https://twitter.com/lidofinance"
              target="_blank"
              rel="noopener"
              className="sc-9e0fafd8-0 sc-45e72c65-14 sc-45e72c65-15 lmlpeK gxjrmx eqaLDc"
            >
              <img
                src="/static/images/header/twitter.svg"
                alt=""
                className="sc-45e72c65-13 iGwgyY"
                data-xblocker="passed"
                style={{ visibility: "visible" }}
              />
              Join X
            </NavLink>
            <div data-testid="header-networks" className="sc-45e72c65-8 khXzjc">
              <span className="sc-45e72c65-9 bROWAQ">Networks</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Networks"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 fGrlYi">
                  <CardRow
                    description="ETH"
                    href="/ethereum"
                    label="Ethereum"
                    logoSrc="/static/images/header/networks/ethereum.svg"
                  />
                  <CardRow
                    description="MATIC"
                    href="/polygon"
                    label="Polygon"
                    logoSrc="/static/images/header/networks/polygon.svg"
                  />
                  <CardRow
                    description="Join in"
                    href="/rewards-share"
                    label="Rewards-Share program"
                    logoSrc="/static/images/header/networks/referral.svg"
                  />
                </div>
              </div>
            </div>
            <div
              data-testid="header-node-operators"
              className="sc-45e72c65-8 khXzjc"
            >
              <span className="sc-45e72c65-9 bROWAQ">Node operators</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Node operators"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 djGcMk">
                  <CardColumn
                    description="Consolidated info and resources related to Lido’s Node
                      Operator sets, all in one place"
                    href="https://operatorportal.lido.fi"
                    label="Apply to be a Node Operator"
                    logoSrc="/static/images/header/node-operators/node-operator.svg"
                  />
                  <CardColumn
                    description="Explore requirements and apply to be a Lido Node Operator"
                    href="https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator"
                    label="Node Operator Portal"
                    logoSrc="/static/images/header/node-operators/node-operator.svg"
                  />
                  <CardColumn
                    description="View details about Lido's expectations for Node Operators"
                    href="https://operatorportal.lido.fi/existing-operator-portal"
                    label="Existing Lido Operators Resources"
                    logoSrc="/static/images/header/node-operators/node-operator.svg"
                  />
                </div>
              </div>
            </div>
            <div
              data-testid="header-governance"
              className="sc-45e72c65-8 khXzjc"
            >
              <span className="sc-45e72c65-9 bROWAQ">Governance</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Governance"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 djGcMk">
                  <CardColumn
                    description="Explore how the decisions in Lido governance process are
                    made"
                    href="/governance"
                    label="Governance process"
                    logoSrc="/static/images/header/governance/governance-process.svg"
                  />
                  <CardColumn
                    description="Explore how Lido Ecosystem Grants Organization works"
                    href="/lego"
                    label="LEGO"
                    logoSrc="/static/images/header/governance/lego.svg"
                  />
                  <CardColumn
                    description="Join the forum to find answers or discuss your ideas for
                    Lido"
                    href="https://research.lido.fi"
                    label="Research forum"
                    logoSrc="/static/images/header/governance/research-forum.svg"
                  />
                  <CardColumn
                    description="Take part in off-chain Snapshot voting"
                    href="https://snapshot.org/#/lido-snapshot.eth"
                    label="Snapshot voting"
                    logoSrc="/static/images/header/governance/snapshot-voting.svg"
                  />
                  <CardColumn
                    description="Explore Lido’s on-chain votes"
                    href="https://vote.lido.fi"
                    label="On-chain voting"
                    logoSrc="/static/images/header/governance/aragon-voting.svg"
                  />
                  <CardColumn
                    description="Explore Easy Track - a way to make on-chain decisions
                    using veto voting"
                    href="https://easytrack.lido.fi"
                    label="Easy Track voting"
                    logoSrc="/static/images/header/governance/easy-track-voting.svg"
                  />
                </div>
              </div>
            </div>
            <div
              data-testid="header-analytics"
              className="sc-45e72c65-8 khXzjc"
            >
              <span className="sc-45e72c65-9 bROWAQ">Analytics</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Analytics"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 djGcMk">
                  <CardColumn
                    description="Check current metrics"
                    href="https://dune.com/lido/lido-dashboards-catalogue"
                    label="All-in-One Lido Analytics"
                    logoSrc="/static/images/header/analytics/dune-analytics.svg"
                  />
                  <CardColumn
                    description="Track the general Lido metrics"
                    href="https://dune.com/lido/lido-morning-coffee-dashboard"
                    label="All-in-One Lido Analytics"
                    logoSrc="/static/images/header/analytics/dune-analytics.svg"
                  />
                  <CardColumn
                    description="Dive into (w)stETH metrics in DeFi"
                    href="https://dune.com/LidoAnalytical/Lido-Finance-Extended#steth-utility"
                    label="(w)stETH in DeFi"
                    logoSrc="/static/images/header/analytics/dune-analytics.svg"
                  />
                </div>
              </div>
            </div>
            <div
              data-testid="header-developers"
              className="sc-45e72c65-8 khXzjc"
            >
              <span className="sc-45e72c65-9 bROWAQ">Developers</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Developers"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 fksWbD">
                  <CardColumnBig
                    description="Connect with the Lido GitHub community and repositories"
                    href="https://github.com/lidofinance"
                    label="GitHub"
                    logoSrc="/static/images/header/developers/github.svg"
                    logoSrcMobile="/static/images/header/developers/github-mobile.svg"
                  />
                  <div className="sc-45e72c65-11 hdyIJG">
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://docs.lido.fi/guides/lido-tokens-integration-guide/"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      Lido tokens integration guide
                    </NavLink>
                    <NavLink className="sc-45e72c65-12 bUnBfH" to="/bug-bounty">
                      Bug Bounty
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://docs.lido.fi"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      Documentation
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://github.com/lidofinance/audits"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      Audits
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://github.com/lidofinance/lido-ethereum-sdk"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      SDK
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-testid="header-community"
              className="sc-45e72c65-8 khXzjc"
            >
              <span className="sc-45e72c65-9 bROWAQ">Community</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="Community"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 jDbssy">
                  <CardRow
                    description="Follow @lidofinance"
                    href="https://twitter.com/lidofinance"
                    label="X"
                    logoSrc="/static/images/header/community/twitter.svg"
                  />
                  <CardRow
                    description="Follow @lidofinance"
                    href="https://discord.com/invite/lido"
                    label="Discord"
                    logoSrc="/static/images/header/community/discord.svg"
                  />
                  <CardRow
                    description="Follow @lidofinance"
                    href="https://t.me/lidofinance"
                    label="Telegram"
                    logoSrc="/static/images/header/community/telegram.svg"
                  />
                  <CardRow
                    description="Join discussions"
                    href="https://research.lido.fi"
                    label="Research forum"
                    logoSrc="/static/images/header/community/research-forum.svg"
                  />
                </div>
              </div>
            </div>
            <div data-testid="header-about" className="sc-45e72c65-8 khXzjc">
              <span className="sc-45e72c65-9 bROWAQ">About</span>
              <div
                data-track-content="true"
                data-content-name="Header"
                data-content-piece="About"
                className="sc-45e72c65-7 cFOpli"
              >
                <div className="sc-45e72c65-10 fksWbD">
                  <CardColumnBig
                    description="Join Blog and explore more info about Lido"
                    href="https://blog.lido.fi"
                    label="Blog"
                    logoSrc="/static/images/header/about/blog.svg"
                  />
                  <div className="sc-45e72c65-11 hdyIJG">
                    <NavLink className="sc-45e72c65-12 bUnBfH" to="/faq">
                      FAQ
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://help.lido.fi/en/"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      Help center
                    </NavLink>
                    <NavLink
                      target="_blank"
                      rel="noopener"
                      to="https://opportunities.lido.fi"
                      className="sc-45e72c65-12 bUnBfH"
                    >
                      Opportunities
                    </NavLink>
                    <NavLink
                      className="sc-45e72c65-12 bUnBfH"
                      to="/static/LIDO_press_kit.zip"
                    >
                      Download press kit
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="sc-45e72c65-3 ldhOOI" />
        <div
          data-testid="burger"
          onClick={handleClick}
          className="sc-61ea0995-0 hQwUZQ sc-45e72c65-16 bYEVZj"
        >
          <div
            className={click ? "sc-61ea0995-1 kKDvaQ" : "sc-61ea0995-1 hIKSfr"}
          />
        </div>
      </div>
    </header>
  );
}
