"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { padding } from "@mui/system";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "",
      display: "inline-flex",
      padding: "60px 120px",
      flexDirection: "column",
      alignItems: "center",
      gap: "64px",
      borderRadius: "15px",
      background: "#FFF",
      boxShadow: "0px 5px 35px 1px rgba(0, 0, 0, 0.35)",
    },
    heading: {
      color: "#324A52",
      textAlign: "center",
      //fontFamily: 'Open Sans',
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "55px" /* 125% */,
      letterSpacing: "-1.5px",
      textTransform: "capitalize",
    },
    downloadSection: {
      position: "relative",
      display: "inline-flex",
      padding: "60px 220px",
      flexDirection: "column",
      alignItems: "center",
      gap: "25px",
      borderRadius: "15px",
      border: "1px solid #DEDEDE",
      width: "100%",
    },
    downloadHeading: {
      color: "#324A52",
      textAlign: "center",
      //fontFamily: "Open Sans",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    downloadButton: {
      display: "flex",
      padding: "7px 16px",
      alignItems: "flex-start",
      gap: "10px",
      color: "var(--stroke-blue, #146EE8)",
      borderRadius: "16px",
      border: "1px solid var(--stroke-blue, #146EE8)",
      //fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "18px" /* 128.571% */,
    },
    infoSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
    },
    infoHeading: {
      color: "#324A52",
      fontFamily: "Open Sans",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    infoListSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "15px",
    },
    infoList: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "15px",
      marginY: "8px",
    },
    infoActionSection: {},
    infoActionButton: {
      display: "flex",
      height: "48px",
      padding: "8px 40px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "100px",
      background: "#336CE0",
      color: "#FFF",
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
    },
    infoListItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      alignSelf: "stretch",
    },
    infoListItemText: {
      margin: "0px",
      color: "#000",
      fontFamily: "Arial",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px" /* 142.857% */,
    },
    wrapper: {
      postion: 'relative',  
      height: "100vh",
      width: "100%",
      padding: "60px 120px",
      display: "inline-flex",
      flexDirection: "column",
      background:
        "var(--dark, linear-gradient(180deg, #121416 0%, #35474E 100%))",
    },
    imageSection: {
      color: "white",
      textAlign: "center",
      padding: "32px 120px",
    },
    succesIcon: {
      position: "absolute",
      top: "-12px",
    },
    svgBundleOne: {
        position: 'absolute',
        top: '116px',
        left: '69px'
    },
    svgBundleTwo: {
        position: 'absolute',
        top: '168px',
        left: '200px'

    }
  })
);

export default function WorkFlowSuccess() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageSection}>hello world</div>
      <div className={classes.container}>
        <h1 className={classes.heading}>All Recipients Are Done Signing!</h1>
        <section className={classes.downloadSection}>
          <div className={classes.succesIcon}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
              >
                <circle cx="7.5" cy="9.5" r="6.5" fill="white" />
                <path
                  d="M8.4375 2C6.76872 2 5.13742 2.49485 3.74988 3.42198C2.36234 4.3491 1.28088 5.66686 0.64227 7.20861C0.00365592 8.75036 -0.163435 10.4469 0.162128 12.0836C0.487691 13.7203 1.29128 15.2237 2.47129 16.4037C3.6513 17.5837 5.15471 18.3873 6.79143 18.7129C8.42814 19.0384 10.1246 18.8713 11.6664 18.2327C13.2081 17.5941 14.5259 16.5127 15.453 15.1251C16.3802 13.7376 16.875 12.1063 16.875 10.4375C16.8731 8.20033 15.9835 6.05534 14.4016 4.47343C12.8197 2.89151 10.6747 2.00194 8.4375 2ZM12.5719 7.82188L6.94688 13.4469C6.92148 13.4735 6.89093 13.4947 6.85709 13.5092C6.82325 13.5237 6.78682 13.5312 6.75 13.5312C6.71319 13.5312 6.67676 13.5237 6.64292 13.5092C6.60907 13.4947 6.57853 13.4735 6.55313 13.4469L4.30313 11.1969C4.25178 11.1445 4.22319 11.0739 4.22356 11.0006C4.22393 10.9272 4.25323 10.857 4.30511 10.8051C4.35698 10.7532 4.42723 10.7239 4.50059 10.7236C4.57394 10.7232 4.64448 10.7518 4.69688 10.8031L6.75 12.8562L12.1781 7.42812C12.2039 7.40184 12.2346 7.38092 12.2685 7.36658C12.3024 7.35224 12.3388 7.34476 12.3756 7.34458C12.4124 7.34439 12.4489 7.3515 12.4829 7.3655C12.5169 7.3795 12.5479 7.4001 12.5739 7.42613C12.5999 7.45215 12.6205 7.48307 12.6345 7.51711C12.6485 7.55114 12.6556 7.58762 12.6554 7.62442C12.6552 7.66122 12.6478 7.69762 12.6334 7.73151C12.6191 7.7654 12.5982 7.79612 12.5719 7.82188Z"
                  fill="#CB3E6D"
                />
              </svg>
            </span>
          </div>
          <h2 className={classes.downloadHeading}>
            Download all of your signed documents.
          </h2>
          <button className={classes.downloadButton}>
            Download your documents
          </button>
        </section>
        <section className={classes.infoSection}>
          <div className={classes.infoListSection}>
            <h3 className={classes.infoHeading}>
              Here’s three things that Aline helps you with:
            </h3>
            <div>
              <ul className={classes.infoList}>
                {[1, 2, 3].map((i) => {
                  return (
                    <li key={i} className={classes.infoListItem}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="19"
                          viewBox="0 0 17 19"
                          fill="none"
                        >
                          <circle cx="7.5" cy="9.5" r="6.5" fill="white" />
                          <path
                            d="M8.4375 2C6.76872 2 5.13742 2.49485 3.74988 3.42198C2.36234 4.3491 1.28088 5.66686 0.64227 7.20861C0.00365592 8.75036 -0.163435 10.4469 0.162128 12.0836C0.487691 13.7203 1.29128 15.2237 2.47129 16.4037C3.6513 17.5837 5.15471 18.3873 6.79143 18.7129C8.42814 19.0384 10.1246 18.8713 11.6664 18.2327C13.2081 17.5941 14.5259 16.5127 15.453 15.1251C16.3802 13.7376 16.875 12.1063 16.875 10.4375C16.8731 8.20033 15.9835 6.05534 14.4016 4.47343C12.8197 2.89151 10.6747 2.00194 8.4375 2ZM12.5719 7.82188L6.94688 13.4469C6.92148 13.4735 6.89093 13.4947 6.85709 13.5092C6.82325 13.5237 6.78682 13.5312 6.75 13.5312C6.71319 13.5312 6.67676 13.5237 6.64292 13.5092C6.60907 13.4947 6.57853 13.4735 6.55313 13.4469L4.30313 11.1969C4.25178 11.1445 4.22319 11.0739 4.22356 11.0006C4.22393 10.9272 4.25323 10.857 4.30511 10.8051C4.35698 10.7532 4.42723 10.7239 4.50059 10.7236C4.57394 10.7232 4.64448 10.7518 4.69688 10.8031L6.75 12.8562L12.1781 7.42812C12.2039 7.40184 12.2346 7.38092 12.2685 7.36658C12.3024 7.35224 12.3388 7.34476 12.3756 7.34458C12.4124 7.34439 12.4489 7.3515 12.4829 7.3655C12.5169 7.3795 12.5479 7.4001 12.5739 7.42613C12.5999 7.45215 12.6205 7.48307 12.6345 7.51711C12.6485 7.55114 12.6556 7.58762 12.6554 7.62442C12.6552 7.66122 12.6478 7.69762 12.6334 7.73151C12.6191 7.7654 12.5982 7.79612 12.5719 7.82188Z"
                            fill="#CB3E6D"
                          />
                        </svg>
                      </span>
                      <p className={classes.infoListItemText}>
                        Ut ut sint id repellat ullam sint atque illo ratione
                        sunt.
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={classes.infoActionSection}>
            <button className={classes.infoActionButton}>Get Started</button>
          </div>
        </section>
      </div>
    </div>
  );
}
