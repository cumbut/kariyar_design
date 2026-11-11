/* @ds-bundle: {"format":4,"namespace":"CircleDesignSystem_c144cf","components":[{"name":"GhostButton","sourcePath":"components/actions/GhostButton.jsx"},{"name":"GradientButton","sourcePath":"components/actions/GradientButton.jsx"},{"name":"PastelButton","sourcePath":"components/actions/PastelButton.jsx"},{"name":"EmailCapture","sourcePath":"components/forms/EmailCapture.jsx"},{"name":"FeatureSection","sourcePath":"components/marketing/FeatureSection.jsx"},{"name":"RatingBadge","sourcePath":"components/marketing/RatingBadge.jsx"},{"name":"TrustStrip","sourcePath":"components/marketing/TrustStrip.jsx"},{"name":"ProductTabs","sourcePath":"components/navigation/ProductTabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"AccentCard","sourcePath":"components/surfaces/AccentCard.jsx"},{"name":"ProductPanel","sourcePath":"components/surfaces/ProductPanel.jsx"},{"name":"VideoCard","sourcePath":"components/surfaces/VideoCard.jsx"}],"sourceHashes":{"components/actions/GhostButton.jsx":"65d6b3c867c1","components/actions/GradientButton.jsx":"8cb5de120aa3","components/actions/PastelButton.jsx":"9e3c1e48d8de","components/forms/EmailCapture.jsx":"2d38399b7f37","components/marketing/FeatureSection.jsx":"746751e67ca9","components/marketing/RatingBadge.jsx":"0b10bf9191f0","components/marketing/TrustStrip.jsx":"fc58b3007bca","components/navigation/ProductTabs.jsx":"f6f9c863e54a","components/navigation/TopNav.jsx":"ff5e06a3e227","components/surfaces/AccentCard.jsx":"9fbb86238208","components/surfaces/ProductPanel.jsx":"cc17cdb1bdf7","components/surfaces/VideoCard.jsx":"21d23294576d","ui_kits/website/Features.jsx":"f9795fd5bc6b","ui_kits/website/Hero.jsx":"26ceb93f7ef6","ui_kits/website/ProductShowcase.jsx":"8709ef7278d8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CircleDesignSystem_c144cf = window.CircleDesignSystem_c144cf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/GhostButton.jsx
try { (() => {
function GhostButton({
  children,
  onDark = false,
  size = 'md',
  onClick,
  disabled = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const fg = onDark ? '#fff' : 'var(--color-pure-ink)';
  const bd = onDark ? 'var(--color-twilight-iris)' : 'var(--color-hairline)';
  const hbg = onDark ? 'rgba(255,255,255,0.06)' : '#f6f7f9';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-inter)',
      fontWeight: 500,
      fontSize: size === 'sm' ? 14 : 16,
      lineHeight: 1.25,
      letterSpacing: size === 'sm' ? '-0.22px' : '-0.29px',
      color: fg,
      background: hover && !disabled ? hbg : 'transparent',
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-buttons)',
      padding: '8px 18px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background 150ms var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GhostButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/GhostButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/GradientButton.jsx
try { (() => {
function GradientButton({
  children,
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = size === 'sm' ? '10px 18px' : size === 'lg' ? '16px 28px' : '14px 24px';
  const fs = size === 'sm' ? 14 : size === 'lg' ? 18 : 16;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-inter)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.25,
      color: '#fff',
      background: 'var(--gradient-signal-blue)',
      border: 'none',
      borderRadius: 'var(--radius-buttons)',
      padding: pad,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : undefined,
      filter: hover && !disabled ? 'brightness(1.1)' : 'none',
      transform: press && !disabled ? 'scale(0.98)' : 'none',
      transition: 'filter 150ms var(--ease-standard), transform 150ms var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GradientButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/GradientButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/PastelButton.jsx
try { (() => {
const TONES = {
  blush: 'var(--color-blush-mist)',
  lavender: 'var(--color-lavender-whisper)',
  sunbeam: 'var(--color-sunbeam)',
  sky: 'var(--color-polar-sky)',
  mint: 'var(--color-mint-glow)'
};
function PastelButton({
  children,
  tone = 'lavender',
  size = 'md',
  onClick,
  disabled = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-inter)',
      fontWeight: 500,
      fontSize: size === 'sm' ? 14 : 16,
      lineHeight: 1.25,
      letterSpacing: size === 'sm' ? '-0.22px' : '-0.29px',
      color: 'var(--color-pure-ink)',
      background: TONES[tone] || TONES.lavender,
      border: 'none',
      borderRadius: 'var(--radius-buttons)',
      padding: size === 'sm' ? '10px 18px' : '14px 24px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      filter: hover && !disabled ? 'brightness(0.96)' : 'none',
      transition: 'filter 150ms var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { PastelButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/PastelButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/EmailCapture.jsx
try { (() => {
function EmailCapture({
  placeholder = 'Enter your email',
  cta = 'Get started',
  onSubmit,
  width = 440
}) {
  const [v, setV] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(v);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 48,
      width,
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: 'var(--radius-inputs)',
      padding: 4,
      boxShadow: focus ? 'var(--shadow-subtle)' : 'none',
      transition: 'box-shadow 150ms'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: v,
    placeholder: placeholder,
    onChange: e => setV(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '0 16px',
      fontFamily: 'var(--font-inter)',
      fontSize: 16,
      letterSpacing: '-0.29px',
      color: 'var(--color-pure-ink)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: 40,
      border: 'none',
      borderRadius: 'var(--radius-buttons)',
      padding: '0 20px',
      background: 'var(--gradient-signal-blue)',
      color: '#fff',
      fontFamily: 'var(--font-inter)',
      fontWeight: 600,
      fontSize: 16,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, cta));
}
Object.assign(__ds_scope, { EmailCapture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/EmailCapture.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureSection.jsx
try { (() => {
function FeatureSection({
  media,
  eyebrow,
  title,
  body,
  cta,
  onCta,
  reverse = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 64,
      alignItems: 'center',
      padding: '0 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 1 : 2,
      color: '#fff'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      color: 'var(--fg-on-dark-muted)',
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-1.24px',
      textWrap: 'pretty'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 18,
      lineHeight: 1.45,
      letterSpacing: '-0.38px',
      color: 'var(--fg-on-dark-muted)',
      textWrap: 'pretty'
    }
  }, body), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GradientButton, {
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { FeatureSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureSection.jsx", error: String((e && e.message) || e) }); }

// components/marketing/RatingBadge.jsx
try { (() => {
function RatingBadge({
  platforms = ['G2', 'Capterra', 'GetApp', 'Trustpilot'],
  stars = 5,
  label = '70k+ reviews'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      height: 20,
      padding: '0 6px',
      borderRadius: 9999,
      border: '1px solid var(--color-twilight-iris)',
      fontSize: 10,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, p))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-star)',
      letterSpacing: 1
    }
  }, '★'.repeat(stars)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { RatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/RatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustStrip.jsx
try { (() => {
function TrustStrip({
  caption = "Trusted by the world's top communities",
  logos = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '-0.22px',
      color: 'var(--color-steel)',
      marginBottom: 24
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, logos.map((l, i) => typeof l === 'string' && !/\.(svg|png|jpe?g|webp)$/i.test(l) ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 100,
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-0.46px',
      opacity: 0.9
    }
  }, l) : /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l,
    alt: "",
    style: {
      width: 100,
      height: 28,
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)'
    }
  }))));
}
Object.assign(__ds_scope, { TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProductTabs.jsx
try { (() => {
function ProductTabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t),
      style: {
        fontFamily: 'var(--font-inter)',
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: '-0.29px',
        lineHeight: 1.25,
        color: on ? '#fff' : 'var(--color-steel)',
        background: on ? 'var(--color-tab-active)' : 'transparent',
        boxShadow: on ? 'inset 0 0 0 1px rgba(255,255,255,0.06)' : 'none',
        border: 'none',
        borderRadius: 'var(--radius-tabs)',
        padding: '10px 18px',
        cursor: 'pointer',
        transition: 'color 150ms, background 150ms'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { ProductTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProductTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  brand = 'Circle',
  links = ['Product', 'Solutions', 'Resources', 'Pricing'],
  active,
  onLink,
  ctaLabel = 'Start free trial',
  loginLabel = 'Log in',
  onCta,
  onLogin
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      background: '#fff',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max-width)',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-0.6px',
      color: 'var(--color-pure-ink)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1,
      justifyContent: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLink && onLink(l);
    },
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '-0.22px',
      color: active === l ? 'var(--color-nebula-blue)' : 'var(--color-pure-ink)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--color-pure-ink)'
    }
  }, loginLabel), /*#__PURE__*/React.createElement(__ds_scope.GhostButton, {
    size: "sm",
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AccentCard.jsx
try { (() => {
const TONES = {
  blush: 'var(--color-blush-mist)',
  lavender: 'var(--color-lavender-whisper)',
  sunbeam: 'var(--color-sunbeam)',
  sky: 'var(--color-polar-sky)',
  mint: 'var(--color-mint-glow)'
};
function AccentCard({
  tone = 'blush',
  title,
  children,
  small = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: TONES[tone] || TONES.blush,
      borderRadius: small ? 'var(--radius-smallcards)' : 'var(--radius-cards)',
      padding: 'var(--card-padding)',
      boxSizing: 'border-box',
      color: 'var(--color-pure-ink)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.46px',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: '-0.22px',
      color: 'var(--color-charcoal)'
    }
  }, children));
}
Object.assign(__ds_scope, { AccentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AccentCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductPanel.jsx
try { (() => {
function ProductPanel({
  children,
  radius = 24,
  padding = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-hairline)',
      borderRadius: radius,
      boxShadow: 'var(--shadow-panel)',
      padding,
      overflow: 'hidden',
      boxSizing: 'border-box',
      color: 'var(--color-pure-ink)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ProductPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/VideoCard.jsx
try { (() => {
function VideoCard({
  title,
  subtitle,
  image,
  onPlay,
  height = 320,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onPlay,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-cards)',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'var(--surface-video)',
      padding: 24,
      boxSizing: 'border-box',
      color: '#fff',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.55,
      mixBlendMode: 'luminosity'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '-0.6px',
      lineHeight: 1.33
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      letterSpacing: '-0.22px',
      marginTop: 4,
      color: 'var(--fg-on-dark-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#fff',
      transform: 'translate(-50%,-50%) scale(' + (hover ? 1.08 : 1) + ')',
      transition: 'transform 200ms var(--ease-standard)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      borderLeft: '13px solid var(--color-pure-ink)',
      marginLeft: 3
    }
  })));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/VideoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
const {
  FeatureSection,
  VideoCard,
  ProductPanel,
  AccentCard
} = window.CircleDesignSystem_c144cf;
function Features({
  onPlay,
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 120,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(FeatureSection, {
    media: /*#__PURE__*/React.createElement(VideoCard, {
      height: 360,
      title: "Meet the founders",
      subtitle: "Why we built Circle \xB7 3 min",
      onPlay: onPlay
    }),
    eyebrow: "Your brand",
    title: "A home for your community, under your own brand",
    body: "Launch discussions, events and courses in one place, with your domain and your colors.",
    cta: "Start free trial",
    onCta: onCta
  }), /*#__PURE__*/React.createElement(FeatureSection, {
    reverse: true,
    media: /*#__PURE__*/React.createElement(ProductPanel, {
      padding: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 12
      }
    }, "This week"), [['New members', '1,284'], ['Posts', '3,902'], ['Event RSVPs', '612']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderTop: '1px solid var(--color-hairline)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-charcoal)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, v)))),
    eyebrow: "Analytics",
    title: "See what keeps members coming back",
    body: "Engagement, retention and revenue on one dashboard.",
    cta: "Explore analytics",
    onCta: onCta
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px',
      boxSizing: 'border-box',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-1.24px',
      margin: '0 0 32px',
      textAlign: 'center'
    }
  }, "Built for every kind of community"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
      gap: 16
    }
  }, [['blush', 'Creators', 'Turn your audience into members.'], ['lavender', 'Coaches', 'Run cohorts and 1:1 programs.'], ['sunbeam', 'Brands', 'Own your customer community.'], ['sky', 'Educators', 'Sell courses with community built in.'], ['mint', 'Nonprofits', 'Keep supporters close.']].map(([t, h, b]) => /*#__PURE__*/React.createElement(AccentCard, {
    key: t,
    tone: t,
    title: h
  }, b)))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  RatingBadge,
  EmailCapture,
  TrustStrip
} = window.CircleDesignSystem_c144cf;
function Hero({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 24px 64px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(RatingBadge, null), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '28px auto 0',
      maxWidth: 880,
      fontSize: 64,
      lineHeight: 1.1,
      letterSpacing: '-3.2px',
      fontWeight: 700,
      textWrap: 'balance'
    }
  }, "The all-in-one community platform"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 0',
      maxWidth: 600,
      fontSize: 18,
      lineHeight: 1.45,
      letterSpacing: '-0.38px',
      color: 'var(--fg-on-dark-muted)'
    }
  }, "Bring your community, courses, events and memberships together under your own brand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(EmailCapture, {
    cta: "Start free trial",
    onSubmit: onSubmit
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(TrustStrip, {
    logos: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F', 'Brand G']
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductShowcase.jsx
try { (() => {
const {
  ProductTabs,
  ProductPanel
} = window.CircleDesignSystem_c144cf;
const TABS = ['Community', 'Courses', 'Events', 'Live streams', 'Chat', 'Paywalls', 'Email', 'AI'];
const MEMBERS = [['Ava Chen', 'ava@studio.co', 'Admin', 92, 'var(--color-mint-glow)'], ['Leo Park', 'leo@park.dev', 'Member', 78, 'var(--color-polar-sky)'], ['Maya Ross', 'maya@ross.io', 'Moderator', 85, 'var(--color-lavender-whisper)'], ['Omar Diaz', 'omar@diaz.me', 'Member', 41, 'var(--color-sunbeam)'], ['Nina Wolfe', 'nina@wolfe.fm', 'Member', 63, 'var(--color-blush-mist)']];
function Sidebar({
  tab
}) {
  const items = ['Home', tab, 'Members', 'Analytics', 'Settings'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      borderRight: '1px solid var(--color-hairline)',
      padding: 16,
      boxSizing: 'border-box',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '-0.22px',
      marginBottom: 16
    }
  }, "Your community"), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 14,
      fontWeight: 500,
      padding: '8px 12px',
      borderRadius: 9999,
      marginBottom: 2,
      background: it === 'Members' ? 'var(--color-polar-sky)' : 'transparent',
      color: it === 'Members' ? 'var(--color-pure-ink)' : 'var(--color-charcoal)'
    }
  }, it)));
}
function MemberTable() {
  const th = {
    textAlign: 'left',
    fontSize: 11,
    fontWeight: 500,
    color: 'var(--color-steel)',
    padding: '10px 16px',
    borderBottom: '1px solid var(--color-hairline)'
  };
  const td = {
    fontSize: 14,
    letterSpacing: '-0.22px',
    padding: '12px 16px',
    borderBottom: '1px solid var(--color-hairline)',
    color: 'var(--color-charcoal)'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Email"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Role"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Score"))), /*#__PURE__*/React.createElement("tbody", null, MEMBERS.map(([n, e, r, s, bg]) => /*#__PURE__*/React.createElement("tr", {
    key: n
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--color-pure-ink)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: bg,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 600,
      marginRight: 10
    }
  }, n.split(' ').map(x => x[0]).join('')), n), /*#__PURE__*/React.createElement("td", {
    style: td
  }, e), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: bg,
      borderRadius: 9999,
      padding: '3px 10px',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--color-pure-ink)'
    }
  }, s))))));
}
function ProductShowcase() {
  const [tab, setTab] = React.useState('Community');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 24px 120px'
    }
  }, /*#__PURE__*/React.createElement(ProductTabs, {
    tabs: TABS,
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(ProductPanel, {
    style: {
      marginTop: 32,
      display: 'flex',
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    tab: tab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.46px'
    }
  }, "Members ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-steel)',
      fontWeight: 500,
      fontSize: 14
    }
  }, "\xB7 ", tab)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 9999,
      padding: '8px 16px',
      width: 200
    }
  }, "Search members")), /*#__PURE__*/React.createElement(MemberTable, null))));
}
window.ProductShowcase = ProductShowcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductShowcase.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GhostButton = __ds_scope.GhostButton;

__ds_ns.GradientButton = __ds_scope.GradientButton;

__ds_ns.PastelButton = __ds_scope.PastelButton;

__ds_ns.EmailCapture = __ds_scope.EmailCapture;

__ds_ns.FeatureSection = __ds_scope.FeatureSection;

__ds_ns.RatingBadge = __ds_scope.RatingBadge;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

__ds_ns.ProductTabs = __ds_scope.ProductTabs;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.AccentCard = __ds_scope.AccentCard;

__ds_ns.ProductPanel = __ds_scope.ProductPanel;

__ds_ns.VideoCard = __ds_scope.VideoCard;

})();
