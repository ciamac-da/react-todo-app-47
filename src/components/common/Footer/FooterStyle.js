import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    backgroundColor: "#3f51b5",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    display: "block",
    width: "100vw",
    marginBottom: "0px",
    height: "25px",
  },
  typo: {
    color: "#fff",
    fontWeight: "bolder",
  },
}));
export default useStyles;
