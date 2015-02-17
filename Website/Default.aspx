<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Website.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app>
<head runat="server">
    <title>DSM Giftshop</title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/metro-bootstrap.min.css" rel="stylesheet" />
    <link href="Content/custom.css" rel="stylesheet" />

    <script src="scripts/jquery-2.0.3.min.js"></script>
    <script src="scripts/bootstrap.min.js"></script>

</head>
<body>
    <form id="form1" runat="server">
        <div id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <a href="/">
                            <img src="image/img_top_header.jpg" /></a>
                    </div>
                    <div class="col-lg-6 menu">
                        <div>
                            <div class="col-lg-2 menu-item">
                                <a class="active" href="/">Home</a>
                            </div>
                            <div class="col-lg-3 menu-item">
                                <a href="/">products</a>
                            </div>
                            <div class="col-lg-3 menu-item">
                                <a href="/">Single item</a>
                            </div>
                            <div class="col-lg-4 menu-item">
                                <a href="/">Customer Service</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="col-lg-4 menu-item-image">
                            <div class="img-box">
                                <img src="image/36.png" />
                            </div>
                            <p>Search</p>
                        </div>
                        <div class="col-lg-4 menu-item-image">
                            <div class="img-box">
                                <img src="image/34.png" />
                            </div>
                            <p>You</p>
                        </div>
                        <div class="col-lg-4 menu-item-image">
                            <div class="img-box">
                                <img src="image/37.png" />
                            </div>
                            <p>Cart</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div id="container" class="container main">
            <div class="row">
                <div class="col-md-6">
                    <div class="block ">
                        <img src="image/img_11784.jpg" class="img-responsive" />
                        <div class="block-footer">
                            <div class="col-md-10 pull-left">
                                Triangle backpack
                                <br />
                                per piece

                            </div>
                            <div class="col-md-2 pull-right block-footer-price">
                                € 4,50
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="block">
                        <img src="image/5.png" class="img-responsive" />
                    </div>
                    <div class="block">
                        <img src="image/SPECIAL_-_USB_Hub.jpg" class="img-responsive" />
                        <div class="block-footer">
                            <div class="col-md-10 pull-left">
                                Triangle backpack
                                <br />
                                per piece

                            </div>
                            <div class="col-md-2 pull-right block-footer-price">
                                € 4,50
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="block">
                        <img src="image/NEW_Water.jpg" class="img-responsive" />
                        <div class="block-footer">
                            <div class="col-md-10 pull-left">
                                Triangle backpack
                                <br />
                                per piece

                            </div>
                            <div class="col-md-2 pull-right block-footer-price">
                                € 4,50
                            </div>
                        </div>
                    </div>

                    <div class="block">
                        <img src="image/APPAREL_Jacket_01.jpg" class="img-responsive" />
                        <div class="block-footer">
                            <div class="col-md-10 pull-left">
                                Triangle backpack
                                <br />
                                per piece

                            </div>
                            <div class="col-md-2 pull-right block-footer-price">
                                € 4,50
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
        </div>
    </form>
    <script src="scripts/custom.js"></script>
</body>
</html>
