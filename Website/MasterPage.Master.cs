using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Website
{
    public partial class MasterPage : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Url.ToString().Contains("products"))
            {
                lnkProducts.Attributes["class"] = "active";
            }
            else if (Request.Url.ToString().Contains("service"))
            {
                lnkCustomerService.Attributes["class"] = "active";
            }
            else
            {
                lnkHome.Attributes["class"] = "active";
            }
        }
    }
}