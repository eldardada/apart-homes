module.exports = {
    outputStyle: 'sass', /* less || scss || sass || styl */
      columns: 12, /* number of grid columns */
      offset: '40px', /* gutter width px || % || rem */
      mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
      container: {
          maxWidth: '1230px', /* max-width оn very large screen */
          fields: '20px' /* side fields */
      },
      breakPoints: {
        xl: {
            width: "1250px"
            },
        md : {
            width: "960px",
          },
          sm: {
              width: "720px"
          },
          xs: {
              width: "576px"
          },
          xxs: {
              width: "420px"
          },
          extra: {
            width: "375px"
          }
      }
}
