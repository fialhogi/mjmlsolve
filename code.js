<mjml>
  <mj-head>
    <mj-style>
      @media (max-width:320px) {
        .header-txt {padding: 0 50px !important;}
        .header-txt div {font-size:35px !important;}
        .left-col div {height:60px !important;}
        .right-col div {height:60px !important;}
      }

      @media (max-width:250px) {
        .header-txt {padding: 0 50px !important;}
        .header-txt div {font-size:35px !important;}
        .left-col div {height:60px !important;}
        .right-col div {height:60px !important;}
      }
    </mj-style>
  </mj-head>
  <mj-body>
    <mj-section rechat-editable="tree" background-color="#100b28" padding="35px 0">
      <mj-column>
          <mj-text css-class="header-txt" color="#fff" font-size="38px" padding="0 70px"font-weight="bold" font-family="saintecolombe-regular, Times New Roman, Times, serif">test <span style="font-family:Helvetica, Arial, sans-serif;">template</span></mj-text>
      </mj-column>
    </mj-section>
    <mj-section rechat-editable="tree" background-color="#fff" padding="0">
      <mj-group>
        <mj-column width="5%" background-color="#100b28" padding="30px 0">
            <mj-spacer css-class="left-col" height="120px" />
         </mj-column>
        <mj-column width="90%" background-color="#fff" padding="0">
            <mj-image align="center" rechat-assets="listing-image" src="https://d2j29n432zojb.cloudfront.net/NTREIS-113523780-5.jpg" href="#" padding="0"></mj-image>
          </mj-column>
        <mj-column width="5%" background-color="#100b28" padding="30px 0">
            <mj-spacer css-class="right-col" height="120px" />
         </mj-column>
    </mj-group>
</mj-section>    
  </mj-body>
</mjml>