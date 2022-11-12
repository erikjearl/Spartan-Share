import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
  },
  title: {
    width: "100%"
  },
  smallBox:{
    width: "48%"
  },
  fileType:{
    width: "48%",
    margin: '8px 0px 0px 8px'
  },
  fileInput: {
    margin: '10px 0 10px 10px ',
  },
  buttonSubmit: {
    marginBottom: 10,
  },

}));