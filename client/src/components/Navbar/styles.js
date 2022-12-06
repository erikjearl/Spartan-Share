import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( () => ({
  
    // basic styling plz fix later
    
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space between',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(10, 48, 78)',
        fontFamily: [
          '"Times New Roman"',
          'Arial',
          'sans-serif',
        ].join(','),
        padding:'20px 0px 0px 0px'
      },
      image: {
        margin: '0px 15px',
      },
      search: {
        marginTop: '15px',
        marginRight: '15px',
      },
      upload: {
        marginTop: '10px',
        marginRight: '15px',
      },
}));