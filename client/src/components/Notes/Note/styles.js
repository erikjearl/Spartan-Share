import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  }, 
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '20px',
    color: 'white',
  },
  title:{
    padding: '0 16px',
  },
  paragraph:{
    margin:'0px 15px',
  },
  actions:{
    margin:'0px',
  }
});