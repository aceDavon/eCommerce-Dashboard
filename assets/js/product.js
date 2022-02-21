$(document).ready(function () {
    
    let productUrl = "http://159.65.21.42:9000/create/product"
    let options = {
        method: "POST",
            crossDomain: true,
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                category: $('#productCategory').val(),
                quantity: $('#qty').val(),
                name: $('#prdtName').val(),
                price: $('#price').val(),
                description: $('#prdtDescrp').val(),
                image: $('#file').val()
            },
            dataType: "json"
    }
    
    $.ajax({
        url: "http://159.65.21.42:9000/products",
        method: "GET",
        success: function (data) {
            let i = 0;
            while( i<= 29) {
                let prodTable =`
                    <tr>
                        <td><input type="checkbox" name="" id=""></td>
                        <td>${data[i].name}</td>
                        <td class="blue"><a href="#">${data[i].quantity}</a></td>
                        <td>${data[i].category}</td>
                        <td>£${data[i].price}</td>
                    </tr>
                `;
                $('.product-table').append(prodTable);
                i++;
            }
        }
    });
    
    $.ajax({
        url: "http://159.65.21.42:9000/users",
        method: "GET",
        success: function (data) {
            let i = 0;
            while(i <= data.length -1){
                console.log(data[i])
                let userTable = `
                 <tr>
                     <td><input type="checkbox" name="" id=""></td>
                     <td>${data[i].name}</td>
                     <td class="blue"><a href="#">${data[i].email}</a></td>
                     <td>${data[i].password}</td>
                     <td>${data[i].phone}</td>
                 </tr>
             `;
             $('.user-table').append(userTable);
             i++;
            }
        },
        Error: function(err) {
            console.log(err);
        }
    });

    $('#createPrdt').click(function () {
        let img = $('#file')[0].files[0];
        if(!img){
            alert('please make sure to choose a file for upload');
        }else {
           fetch(productUrl, options)
            .then(data => data.json())
                .then(data => {
                    alert(data.name + " created successfully with id of " + data._id);
                    console.log(data);
                }).catch(err => console.log(err))
        }
    });

    let sideBar = `
    <div class="logo">
    <h3 class="logo-txt">
        sassi holford
    </h3>
</div>
<ul class="dashboard">
    <li><a href="../index.html" class="side-menu-links">dashboard</a></li>
</ul>
<ul class="side-menu-items">
    <label for="store" class="menu-label">store</label>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/landing-page.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Pages</a>
        <span class="link-icon">
            <img src="../assets/images/icons/next.png" alt="" class="next-btn1">
        </span>
        <ul class="menu-list-level2-1">
            <li><a href="#" class="side-menu-links">Pricing</a></li>
            <li><a href="#" class="side-menu-links">Careers</a></li>
            <li><a href="#" class="side-menu-links">Blog</a></li>
            <li><a href="#" class="side-menu-links">FAQ</a></li>
            <li><a href="#" class="side-menu-links">our Team</a></li>
        </ul>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/account.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Account</a>
        <span class="link-icon">
            <img src="../assets/images/icons/next.png" alt="" class="next-btn2">
        </span>
        <ul class="menu-list-level2-2">
            <li><a href="#" class="side-menu-links">Overview</a></li>
            <li><a href="#" class="side-menu-links">Settings</a></li>
            <li><a href="#" class="side-menu-links">Security</a></li>
            <li><a href="#" class="side-menu-links">Transactions</a></li>
            <li><a href="#" class="side-menu-links">API Keys</a></li>
        </ul>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/product.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Product</a>
        <span class="link-icon">
            <img src="../assets/images/icons/next.png" alt="" class="next-btn3">
        </span>
        <ul class="menu-list-level2-3">
            <li><a href="./products.html" class="side-menu-links">All Proucts</a></li>
            <li><a href="#" class="side-menu-links">Category</a></li>
            <li><a href="./product-form.html" class="side-menu-links">Add Product</a></li>
            <li><a href="#" class="side-menu-links">Remove Product</a></li>
            <li><a href="#" class="side-menu-links">Logistics</a></li>
        </ul>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/user.png" alt="">
        </span>
        <a href="./user.html" class="side-menu-links">Users</a>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/order.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Orders</a>
    </li>
</ul>
<ul class="side-menu-items">
    <label for="apps" class="menu-label">apps</label>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/services.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Projects</a>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/ecommerce.png" alt="">
        </span>
        <a href="#" class="side-menu-links">eCommerce</a>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/school.png" alt="">
        </span>
        <a href="#" class="side-menu-links">School Portal</a>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/businessman.png" alt="">
        </span>
        <a href="#" class="side-menu-links">CRM</a>
    </li>
    <li>
        <span class="side-icons">
            <img src="../assets/images/icons/customer-service.png" alt="">
        </span>
        <a href="#" class="side-menu-links">Support Center</a>
    </li>
</ul>
    `;

    let navBar = `
    <div class="nav-menu">
    <ul class="nav-list">
        <li><a href="../index.html#" class="menu-links active">dashboards</a></li>
        <li><a href="#" class="menu-links">pages</a>
        <li><a href="#" class="menu-links">store</a>
            <ul class="menu-level2-1">
                <li><a href="#" class="side-menu-links">Pricing</a></li>
                <li><a href="#" class="side-menu-links">Careers</a></li>
                <li><a href="#" class="side-menu-links">Blog</a></li>
                <li><a href="#" class="side-menu-links">FAQ</a></li>
                <li><a href="#" class="side-menu-links">our Team</a></li>
            </ul>
        </li>
        <li><a href="#" class="menu-links">apps</a>
            <ul class="menu-level2-2">
                <li>
                    <a href="#" class="side-menu-links">Projects</a>
                </li>
                <li>
                    <a href="#" class="side-menu-links">eCommerce</a>
                </li>
                <li>
                    <a href="#" class="side-menu-links">School Portal</a>
                </li>
                <li>
                    <a href="#" class="side-menu-links">CRM</a>
                </li>
                <li>
                    <a href="#" class="side-menu-links">Support Center</a>
                </li>
            </ul>
        </li>
        <li><a href="#" class="menu-links">resources</a></li>
    </ul>
</div>
<div class="top-icons">
    <div>
        <ul>
            <li>
                <a href="#" class="side-menu-links">
                    <img src="../assets/images/icons/seach.png" alt="">
                </a>
            </li>
            <li>
                <a href="#" class="side-menu-links">
                    <img src="../assets/images/icons/chart.png" alt="">
                </a>
            </li>
            <li>
                <a href="#" class="side-menu-links">
                    <div class="notif"></div>
                    <img src="../assets/images/icons/chat.png" alt="">
                </a>
            </li>
            <li>
                <a href="#" class="side-menu-links">
                    <img src="../assets/images/icons/idea.png" alt="">
                </a>
            </li>
        </ul>
    </div>
    <div class="top-avatar">
        <img src="../assets/images/icons/avatar.jpg" alt="">
    </div>
</div>
    `;

    let subNav = `
    <div class="sub-header-txt">
    <h3>eCommerce Dashboard</h3>
</div>
<div class="sub-header-links">
    <a href="#" class="sub-header-btn">manage sales</a>
    <a href="./product-form.html" class="sub-header-btn-inverted">add product</a>
</div>
    `;

    let ribbon = `
        <div class="ribbon-left">
            <input type="search" name="" id="" placeholder="search">
        </div>
        <div class="ribbon-right">
            <div class="items-filter">
                <input type="text" name="" id="" placeholder="filter">
            </div>
            <div class="items-sort">
                <select name="" id="items-sort">
                    <option value="">sort by</option>
                    <option value="category">category</option>
                    <option value="lowest-prices">Lowest prices</option>
                    <option value="highest-prices">higest prices</option>
                    <option value="category">category</option>
                </select>
            </div>
        </div>
    `;

    let footer = `
            <div class="copyright">
                <p>&copy; 2022, all rights reserved</p>
            </div>
            <div class="footer-menu">
                <ul>
                    <li><a href="#" class="footer-links">Help</a></li>
                    <li><a href="#" class="footer-links">support</a></li>
                    <li><a href="#" class="footer-links">purchase</a></li>
                </ul>
            </div>
    `;
    
    $('.sidebar').append(sideBar);
    $('.nav-bar').append(navBar);
    $('.sub-nav').append(subNav);
    $('.table-ribbon').append(ribbon);
    $('.footer').append(footer);

    $('.next-btn3').click(function () { 
        $('.menu-list-level2-3').toggleClass('show');
        $('.menu-list-level2-3').toggle();
        
    });
    $('.next-btn2').click(function () { 
        $('.menu-list-level2-2').toggleClass('show');
        $('.menu-list-level2-2').toggle();
        
    });
    $('.next-btn1').click(function () { 
        $('.menu-list-level2-1').toggleClass('show');
        $('.menu-list-level2-1').toggle();
        
    });
});