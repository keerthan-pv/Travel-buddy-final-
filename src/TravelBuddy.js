import React from "react";
import './TravelBuddy.css';
import lalBagh from './images/iskon temple.jpg';
import github from './images/vecteezy_free-logo-github_53066802.png';
import linkedin from './images/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930480 (1).png';
import email from './images/vecteezy_gmail-png-icon_16716465.png';




const styles = {
  body: {
    background: "#fff",
    color: "green",
    lineHeight: 1.6,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  header: {
    background: "#f31c42",
    color: "#fff",
    padding: "0.1rem 0",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    lineHeight: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "relative",
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  marqueeText: {
    display: "inline-block",
    paddingLeft: "100%",
    animation: "marquee 10s linear infinite",
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "0.4px",
  },
  container: {
    width: "100%",
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "1rem 1rem",
    boxSizing: "border-box",
  },
  sectionAlt: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.1rem 0",
  },
  textBlock: {
    flex: "1 1 500px",
    maxWidth: "900px",
    textAlign: "center",
  },
  textBlockH2: {
    fontSize: "3rem",
    color: "rgb(242, 28, 67)",
    marginBottom: "1.5rem",
    lineHeight: 1.3,
  },
  textBlockP: {
    fontSize: "1.6rem",
    color: "black",
    marginBottom: "1.5rem",
    lineHeight: 1.6,
    fontWeight: 480,
  },
  imageBlock: {
    flex: "1 1 400px",
    textAlign: "center",
  },
  imageBlockImg: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: 12,
    boxShadow: "3px 8px 25px rgba(0,0,0.35,0.35)",
    border: "3px solid black"
  },
  commentSection: {
    background: "#f9f9f9",
    padding: "1rem 1rem",
    textAlign: "left",
  },
  commentTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
    marginLeft: "0.2rem",
    fontWeight: "600",
    borderBottom: "2px solid red",
    paddingBottom: "0.5rem",
    color: "rgb(0, 0, 0)",
    fontFamily: "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  commentBox: {
    maxWidth: "1800px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  commentCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    background: "",
    padding: "1rem",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    border: "2px solid black"
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid black",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  authorInfo: {
    fontSize: "0.9rem",
    color: "#666",
  },
  footer: {
    background: "rgba(0, 0, 0, 0.87)",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",
    fontSize: "0.9rem",
    marginTop: "auto",
  },
};

const marqueeKeyframes = `
  @keyframes marquee {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export default function ExploreBangalore() {
  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (!styleSheet) return;
    const rules = Array.from(styleSheet.cssRules).map((rule) => rule.cssText);
    if (!rules.includes(marqueeKeyframes)) {
      styleSheet.insertRule(marqueeKeyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <span className="tb-marquee-text">10% cashback on this winter season!</span>
      </header>

      <section style={{ ...styles.sectionAlt, ...styles.container, flexDirection: "row-reverse" }}>
        <div style={styles.imageBlock}>
          <img
            style={styles.imageBlockImg}
            src={lalBagh}
            alt="Lalbagh Botanical Garden"
          />
        </div>
        <div style={styles.textBlock}>
          <h2 className="tb-text-h2">Discover Popular Destinations and Events</h2>
          <p className="tb-text-p">
            Explore Bangalore’s top attractions like Lalbagh, Cubbon Park, ISKCON, and Bangalore Palace.
            Stroll through Lalbagh’s historic glasshouse and lush greenery, or unwind at Cubbon Park’s peaceful trails.
            Visit the majestic ISKCON temple for spiritual calm and cultural charm.
            Step into the royal past at Bangalore Palace.
            Wrap up your day with local flavors and shopping at MG Road and Brigade Road.
          </p>
        </div>
      </section>

      <section style={{ ...styles.sectionAlt, ...styles.container, flexDirection: "row-reverse" }}>
        <div style={styles.imageBlock}>
          <img
            style={styles.imageBlockImg}
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Local guide helping tourists"
          />
        </div>
        <div style={styles.textBlock}>
          <h2 className="tb-text-h2">Are You a Local Guide?</h2>
          <p className="tb-text-p">
            Share your local expertise, earn money, and connect with travelers from around the world.
            Join our guide network to showcase hidden gems, local cuisines, and cultural spots.
            Meet new people, and help others experience Bangalore like a local.
          </p>
        </div>
      </section>

      <section style={styles.commentSection}>
        <h3 style={styles.commentTitle}>What are others saying…</h3>
        <div className="tb-comment-grid">
          <div style={styles.commentCard}>
            <div style={styles.avatar}>
              <img style={styles.avatarImg} src="https://randomuser.me/api/portraits/women/1.jpg" alt="Riya" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentText}>
                Bangalore perfectly blends modern life with nature's beauty. The gardens, weather, and vibrant culture make every visit memorable.
              </div>
              <div style={styles.authorInfo}>by Riya Sharma &nbsp; | &nbsp; June 22nd, 2025</div>
            </div>
          </div>
          <div style={styles.commentCard}>
            <div style={styles.avatar}>
              <img style={styles.avatarImg} src="https://randomuser.me/api/portraits/men/2.jpg" alt="Arjun" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentText}>
                The food scene in Bangalore is amazing - from street food to fine dining. The weather just makes the evenings even better!
              </div>
              <div style={styles.authorInfo}>by Arjun Patel &nbsp; | &nbsp; Nov 2nd, 2024</div>
            </div>
          </div>

          <div style={styles.commentCard}>
            <div style={styles.avatar}>
              <img style={styles.avatarImg} src="https://randomuser.me/api/portraits/women/3.jpg" alt="Sneha" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentText}>
                Bangalore has such a beautiful vibe. The gardens and parks are my favorite part of the city!
              </div>
              <div style={styles.authorInfo}>by Sneha Rao &nbsp; | &nbsp; August 10th, 2023</div>
            </div>
          </div>

          <div style={styles.commentCard}>
            <div style={styles.avatar}>
              <img style={styles.avatarImg} src="https://randomuser.me/api/portraits/men/4.jpg" alt="Kiran" />
            </div>
            <div style={styles.commentContent}>
              <div style={styles.commentText}>
                Loved my visit to Lalbagh and the ISKCON temple. Such a peaceful experience. Highly recommended!
              </div>
              <div style={styles.authorInfo}>by Kiran Das &nbsp; | &nbsp; Sept 5th, 2023</div>
            </div>
          </div>
        </div>
      </section>

     <footer style={styles.footer}>

  <div style={{ marginTop: "1rem", fontSize: "1.5rem", display: "flex", justifyContent: "center", gap: "20px" }}>
    <a href="https://github.com/keerthan-pv" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={github} alt="GitHub" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "1px solid white" }} />
    </a>
    <a href="https://www.linkedin.com/in/keerthan-p-v-494188316/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={linkedin} alt="LinkedIn" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "1px solid white" }} />
    </a>
    <a href="mailto:keeerthanpv2612@email.com" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={email} alt="Email" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "1px solid white" }} />
    </a>
  </div>

  <div>
    <br/>
    &copy; 2025 Explore Bangalore. Made with ❤️ by keerthan pv.
  </div>
</footer>

    </div>
  );
}
