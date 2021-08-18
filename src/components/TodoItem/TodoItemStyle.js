import { withStyles } from "@material-ui/core/styles";

const useStyles = withStyles((theme) => ({
  container: {
    display: "grid",
  },
  todoItem: {
    listStyleType: "none",
    padding: "10px 15px",
    borderTop: "1px solid #678c89",
    width: "70%",
    margin: "auto",
  },
  button: {
    margin: theme.spacing(1),
    float: "right",
  },
}));
export default useStyles;
