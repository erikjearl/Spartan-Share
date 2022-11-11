import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( () => ({
  
    // basic styling plz fix later
    
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(10, 48, 78)',
        fontFamily: [
          '"Times New Roman"',
          'Arial',
          'sans-serif',
        ].join(','),
      },
      image: {
        marginRight: '15px',
      },
      space:{
        marginRight:'200px'
      },
      link: {
        marginTop: '15px',
        marginLeft: '35px',
        color: 'rgba(10, 48, 78)',
        fontFamily: [
          '"Times New Roman"',
          'Arial',
          'sans-serif',
        ].join(','),
      }
}));