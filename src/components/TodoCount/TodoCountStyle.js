import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  countContainer: {
      width:"100%",
      
    },
    textCount: {
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        textAlign:"center",
        color: "#3f51b5",
        fontWeight:"bolder"
    }

}));
export default useStyles;
