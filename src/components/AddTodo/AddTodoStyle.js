import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles((theme) => ({
  container: {
    textAlign:"center",
  },
  text: {
    color: "#3f51b5",
    marginTop: "20px"
  },
  formControler: {
    width: "70%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: "100%",
    textAlignLast: "center",
  },
}));
export default useStyles;
