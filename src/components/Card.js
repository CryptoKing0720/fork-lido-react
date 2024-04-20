import { NavLink } from "react-router-dom";

export const CardRow = (props) => {
  const { description = "", href = "", label = "", logoSrc = "" } = props;

  return (
    <NavLink className="sc-263b9c04-0 jMFvJy" to={href}>
      <img src={logoSrc} alt={label} className="sc-263b9c04-1 bYIXEJ" />
      <div className="sc-263b9c04-2 jDjiGj">
        <h2 className="sc-263b9c04-3 jEDqZK">{label}</h2>
        <p className="sc-263b9c04-4 inQkzd">{description}</p>
      </div>
    </NavLink>
  );
};

export const CardColumn = (props) => {
  const { description = "", href = "", label = "", logoSrc = "" } = props;
  return (
    <NavLink
      target="_blank"
      rel="noopener"
      to={href}
      className="sc-529c2bdd-0 dtxZAp"
    >
      <img src={logoSrc} alt={label} className="sc-529c2bdd-1 gtVGyC" />
      <h2 className="sc-529c2bdd-3 haUHTg">{label}</h2>
      <p className="sc-529c2bdd-4 hvzNlY">{description}</p>
    </NavLink>
  );
};

export const CardColumnBig = (props) => {
  const {
    description = "",
    href = "",
    label = "",
    logoSrc = "",
    logoSrcMobile = "",
  } = props;

  return (
    <NavLink
      target="_blank"
      rel="noopener"
      to={href}
      className="sc-288932f4-0 eSxqtb"
    >
      {logoSrcMobile ? (
        <>
          <img src={logoSrc} alt={label} className="sc-288932f4-1 fdjrqO" />
          <img
            src={logoSrcMobile}
            alt={label}
            className="sc-288932f4-1 sc-288932f4-2 ioaGuz cJrhjv"
          />
        </>
      ) : (
        <img src={logoSrc} alt={label} className="sc-288932f4-1 ioaGuz" />
      )}
      <div className="sc-288932f4-3 jMzsSz">
        <h2 className="sc-288932f4-4 jqrCjG">{label}</h2>
        <p className="sc-288932f4-5 hSCbuk">{description}</p>
      </div>
    </NavLink>
  );
};
