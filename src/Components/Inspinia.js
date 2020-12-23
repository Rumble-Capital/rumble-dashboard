import React, { Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
// import {Fragment} from "@types/react/index";

export const ListGroupItemsContainer = ({ children }) => <ul className="list-group clear-list m-t">{children}</ul>;

//toggle the modal from bootstrap
function launch_modal(modal_selector) {
  $(modal_selector).toggle();
}

export const ModalInspiniaSmallButton = ({ children }) => (
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal6">
    {children}
  </button>
);

export const ModalInspiniaLargeButton = ({ children }) => (
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    {children}
  </button>
);

export const ModalInspiniaButton = ({ children, id }) => (
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#" + id.indexOf("#") > -1 ? id : "#" + id}>
    {children}
  </button>
);

//this is a modal that is implemented from Inspinia
//The title updates the total
export const ModalInspinia = ({ children, title, content, id }) => (
  <div className="modal inmodal" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content animated bounceInRight">
        <div className="modal-header">
          <div className={"row"}>
            <button
              onClick={e => {
                e.preventDefault();
                $("#" + id).toggle();
              }}
              type="button"
              className="close"
              data-dismiss="modal"
            >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <h4 className="modal-title">{title}</h4>
          <small className="font-bold">{content}</small>
        </div>
        <div className="modal-body" style={{ maxHeight: "650px", overflow: "auto" }}>
          {children}
        </div>
        <div className="modal-footer">
          <button
            onClick={e => {
              e.preventDefault();
              $("#" + id).toggle();
            }}
            type="button"
            className="btn btn-white"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ModalInspiniaLarge = ({ children, title, content, id }) => (
  <div className="modal inmodal" id={id || "myModal"} tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg" style={{ width: "90%" }}>
      <div className="modal-content animated bounceInRight">
        <div class="modal-header">
          <div className={"row"}>
            <button
              onClick={e => {
                e.preventDefault();
                $("#" + id).toggle();
              }}
              type="button"
              className="close"
              data-dismiss="modal"
            >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/*<i className="fa fa-laptop modal-icon" />*/}
          <h4 className="modal-title">{title}</h4>
          <small className="font-bold">{content}</small>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            onClick={e => {
              e.preventDefault();
              $("#" + id).toggle();
            }}
            type="button"
            className="btn btn-white"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ModalInspiniaSmall = ({ children, title }) => (
  <div className="modal inmodal fade" id="myModal6" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-white" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

//in case the result is an attribute dict with class_name
function dynamic_table_determine_dict_or_value_input_for_class_name(input_item) {
  if (object_check_if_is_dictionary(input_item)) {
    return input_item["class_name"] || "";
  } else {
    return "";
  }
}

//this function determines if it is a dictionary and returns the result accodringly
function dynamic_table_determine_dict_or_value_input_val(input_item) {
  if (object_check_if_is_dictionary(input_item)) {
    return input_item["value"];
  } else {
    return input_item;
  }
}

//this function just determines if there is a function that the column is assigned to, and then returns the result of that function
//other wise just return the value of the row that we want
function dynamic_table_determine_result_based_on_func(row, column, row_number, column_number, props) {
  if (column.func != undefined) {
    const value_data_dict = row[column.value];
    return column.func(row[column.value], row, column, row_number, column_number, props);
  } else {
    return row[column.value];
  }
}

//takes in all attributes but mainly its to take in the column and props to assess if there is an click_func and then run it with props
function dynamic_table_click_column(props, row, column, row_number, column_number) {
  if (column.click_func != undefined) {
    column.click_func(props, row, column, row_number, column_number);
  }
}

//generate teh class for the table cell
function dynamic_generate_column_class(row, column) {
  const row_td_class = row["td_class"];
  const column_td_class = column["td_class"];
  const row_class = column["row_class"] == undefined ? undefined : row[column["row_class"]];
  const possible_classes = [row_td_class, column_td_class, row_class];
  const usable_classes = possible_classes.filter(function(i) {
    return i != undefined;
  });
  const classes_string = usable_classes.join(" ");
  return classes_string;
}

function DynamicGenerateCellfromAttributes({ cell_click_function, cell_class_name, cell_value }) {
  return (
    <td onClick={cell_click_function} className={cell_class_name}>
      {cell_value}
    </td>
  );
}

function DynamicGenerateColumn({ row, column, row_number, column_number, props }) {
  const attribute_dict = dynamic_table_determine_result_based_on_func(row, column, row_number, column_number, props);
  const input_val = dynamic_table_determine_dict_or_value_input_val(attribute_dict);
  const additional_class = dynamic_table_determine_dict_or_value_input_for_class_name(attribute_dict); //make it doable to pull the class name from the attribute dict from the dictionary

  const cell_click_function = () => {
    dynamic_table_click_column(props, row, column, row_number, column_number);
  };
  const cell_class_name = additional_class + " " + dynamic_generate_column_class(row, column);
  const cell_value = input_val || "";
  //console.log({cell_class_name,cell_value,attribute_dict,row, column, row_number, column_number})
  return (
    <DynamicGenerateCellfromAttributes
      cell_click_function={cell_click_function}
      cell_class_name={cell_class_name}
      cell_value={cell_value}
    />
  );
}

//generate the thead of the entire thing
const DynamicTableThead = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column, column_number) => (
        <th key={column_number} onClick={() => {}} className={column["th_class"] + " " + column["td_class"]}>
          {column.name}
        </th>
      ))}
    </tr>
  </thead>
);

//generate the tbody of the dynamic table based on the rows and columns
const DynamicTableTbody = ({ rows, columns, props }) => (
  <tbody>
    {rows.map((row, row_number) => (
      <tr key={row_number} className={row["tr_class"] || ""}>
        {columns.map((column, column_number) => (
          <DynamicGenerateColumn
            key={column_number}
            row={row}
            column={column}
            row_number={row_number}
            column_number={column_number}
            props={props}
          />
        ))}
      </tr>
    ))}
  </tbody>
);

//generate a table based on inputed rows and columns
export const DynamicTable = ({ rows, columns, className, headerclassName, props }) => (
  <table className={className || "table table-striped"}>
    <DynamicTableThead columns={columns} props={props} />
    <DynamicTableTbody rows={rows} columns={columns} props={props} />
  </table>
);

// row
//    class_name - indicates the class of the entire row
// column
//    value - indicates the value of the row to be in that column
//    name - indicates the name of the column header
//    class_name - indicates the class of the column to be applied
//    class_name_td - classname of the
//    class_name_th - classname of the header row
//    class_name_cell - the class to be gotten from the row item

//rows = [{'name':'a','className':'shade','first_column_classname':'a'}]
//columns = [{'name':'a','className':'first_column_classname'}]
//column in columns should have name for the value for the row value, name of the column, className for the class of the header
//func if it will do anythign to result
export const TableCustom = ({ rows, columns, className }) => (
  <table className={className || "table table-striped"}>
    <thead>
      <tr>
        {columns.map(column => (
          <th className={column["th_class"]}> {column.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, row_number) => (
        <tr className={row["tr_class"] || ""}>
          {columns.map((column, column_number) => (
            <DynamicGenerateColumn row={row} column={column} row_number={row_number} column_number={column_number} />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

function generate_column_value_from_row_column(row, column) {
  const result_value = row[column.value];
  const func = column.func;
  if (column.func != undefined) {
    return column.func(result_value);
  } else {
    return result_value;
  }
}

//this takes the row and iterates all the necessary values across the columns
export const TableStripedColumn = ({ row, columns }) => (
  <Fragment>
    {columns.map(column => (
      <td> {generate_column_value_from_row_column(row, column)}</td>
    ))}
  </Fragment>
);

//creates a table out of rows and columns by iterating through the name and value of the column
//the main attributes needed in the columns array is the name, func, value
export const TableStriped = ({ rows, columns, className }) => (
  <table className={className || "table table-striped"}>
    <thead>
      <tr>
        {columns.map(column => (
          <th> {column.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map(row => (
        <tr>
          <TableStripedColumn row={row} columns={columns} />{" "}
        </tr>
      ))}
    </tbody>
  </table>
);

export const BasicWidget = ({ title, content, sub_title }) => (
  <Fragment>
    <h5>{title}</h5>
    <h2>{content}</h2>
    {/* <div className="progress progress-mini">
      <div style="width: 68%;" class="progress-bar" />
    </div> */}

    <div className="m-t-sm small">{sub_title}</div>
  </Fragment>
);
export const ListGroupItem = ({ title, sub_title, label }) => (
  <li className="list-group-item fist-item">
    <span className="pull-right">{sub_title}</span>
    <span className="label label-success">{label}</span> {title}
  </li>
);

export const ActivityStreamItem = ({ label, label_class, title, sub_title, url, subject }) => (
  <div className="stream-small">
    <span className={label_class || "label label-primary"}> {label}</span>
    <span className="text-muted"> {title} </span> <a href={url || "#"}>{subject}</a> {sub_title}
  </div>
);

//submetric icon example <i className="fa fa-bolt" />
export const MetricBox = ({ title, metric, sub_title, sub_metric, right_title, submetric_icon, id }) => (
  <div className="ibox float-e-margins" id={id}>
    <div className="ibox-title">
      <span className="label label-success pull-right metric-upper-right">{right_title}</span>
      <h5 className={"metric-title"}>{title}</h5>
    </div>
    <div className="ibox-content">
      <h1 className="no-margins metric-number">{metric}</h1>
      <div className="stat-percent font-bold text-success metric-lower-right">
        {sub_metric}
        {submetric_icon}
      </div>
      <small className="metric-sub-title">{sub_title}</small>
    </div>
  </div>
);

export const IBoxContentCore = ({ children }) => (
  <div className="ibox float-e-margins">
    <div className="ibox-content">{children}</div>
  </div>
);

export const IBoxContent = ({ title, children, footer, className }) => (
  <div className={className || "ibox float-e-margins"}>
    <div className="ibox-title">
      <h5>{title}</h5>
      <div className="ibox-tools">
        <a className="collapse-link">
          <i className="fa fa-chevron-up" />
        </a>{" "}
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
          <i className="fa fa-wrench" />
        </a>
        {/*<ul className="dropdown-menu dropdown-user">*/}
        {/*<li>*/}
        {/*<a href="#">Config option 1</a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*<a href="#">Config option 2</a>*/}
        {/*</li>*/}
        {/*</ul>*/}
        <a className="close-link">
          <i className="fa fa-times" />
        </a>
      </div>
    </div>
    <div className="ibox-content">{children}</div>
    <div className="ibox-footer">{footer}</div>
  </div>
);

//Create a package container
export const PackageBox = ({ children, image_source, primary_title, secondary_title, sub_title, footnote }) => (
  <Fragment>
    <div className="text-center m-t-lg">
      <img width="200px" alt="image" src={image_source} />
    </div>
    <div className="text-center m-t-lg">
      <h1>
        {primary_title}{" "}
        <span className="text-navy">
          <br />
          {secondary_title}
        </span>
      </h1>
      <small>{sub_title}</small>
    </div>
    <div>
      <div className="hr-line-dashed" />
      <div className="text-center p-m">{children}</div>
      <div>
        <div className="text-center">
          <small>{footnote}</small>
        </div>
      </div>
    </div>
  </Fragment>
);

export const TopNavigationFrame = ({ children }) => (
  <div className="row border-bottom">
    <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: "0" }}>
      {children}
    </nav>
  </div>
);

export const PageHeading = ({ title, sub_title, children }) => (
  <div className="row wrapper border-bottom white-bg page-heading">
    <div className="col-lg-10">
      <h2>{title}</h2>
      <span className={"breadcrumb"}>{sub_title}</span>
      {children}
    </div>
    <div className="col-lg-2" />
  </div>
);

export const PageHeadingWithContent = ({ title, sub_title, children }) => (
  <Fragment>
    <PageHeading title={title} sub_title={sub_title} />
    <div className="wrapper wrapper-content">{children}</div>
  </Fragment>
);

//navigation at teh top with green button and welcome, home, people on left
const TopNavigationLeft = ({ children }) => (
  <Fragment>
    <div className="navbar-header">
      <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
        <i className="fa fa-bars" />
      </a>
      <form action="search_results.html" className="navbar-form-custom" role="search">
        <div className="form-group">
          <input className="form-control" id="top-search" name="top-search" placeholder="" type="text" />
        </div>
      </form>
    </div>

    <ul className="nav navbar-top-links navbar-right" id="navbar_top_platform">
      <li>
        <span className="m-r-sm text-muted welcome-message">
          Welcome <span id="username" />
        </span>
      </li>
      {/*<li className="dropdown">*/}
      {/*<a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">*/}
      {/*<i className="glyphicon glyphicon-user" /> <span className="label label-primary" id="viewers_list_count" />*/}
      {/*</a>*/}
      {/*<ul className="dropdown-menu dropdown-messages" id="viewers_list" style={{ maxHeight: "250px", overflow: "auto" }}>*/}
      {/*<li>*/}
      {/*<a href="mailbox.html">*/}
      {/*<div>*/}
      {/*<i className="fa fa-envelope fa-fw" /> You have 16 messages <span className="pull-right text-muted small">4 minutes ago</span>*/}
      {/*</div>*/}
      {/*</a>*/}
      {/*</li>*/}
      {/*<li className="divider" />*/}
      {/*<li>*/}
      {/*<a href="profile.html">*/}
      {/*<div>*/}
      {/*<i className="fa fa-twitter fa-fw" /> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span>*/}
      {/*</div>*/}
      {/*</a>*/}
      {/*</li>*/}
      {/*<li className="divider" />*/}
      {/*<li>*/}
      {/*<a href="grid_options.html">*/}
      {/*<div>*/}
      {/*<i className="fa fa-upload fa-fw" /> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span>*/}
      {/*</div>*/}
      {/*</a>*/}
      {/*</li>*/}
      {/*<li className="divider" />*/}
      {/*<li>*/}
      {/*<div className="text-center link-block">*/}
      {/*<a href="notifications.html"><strong>See All Alerts</strong> <i className="fa fa-angle-right"></i></a>*/}
      {/*</div>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</li>*/}
      <li>
        <a href="https://sp006.jpmchase.net/sites/spdrkjzj/SitePages/Home.aspx#initiation">
          <i className="glyphicon glyphicon-home" /> Home
        </a>
      </li>
      {/*<li>*/}
      {/*<a className="right-sidebar-toggle"><i className="fa fa-tasks"></i></a>*/}
      {/*</li>*/}
    </ul>
  </Fragment>
);

export const TopNavigation = () => (
  <TopNavigationFrame>
    <TopNavigationLeft />
  </TopNavigationFrame>
);
//wraps the component without side panel
export const PageWrapperNoSide = ({ children }) => <div className="gray-bg">{children}</div>;

//surrounds the page
export const PageWrapper = ({ children }) => (
  <div id="page-wrapper" className="gray-bg">
    {children}
  </div>
);

export const MainFrame = ({ children }) => (
  <div id="page-wrapper" className="gray-bg">
    <TopNavigation />
    <div className="wrapper wrapper-content">{children}</div>
  </div>
);

//purpose is just to provide the page wrapper so that wrapper content can go inside. also gives with top navigation
export const PageWrapperTopNavigation = ({ children }) => (
  <div id="page-wrapper" className="gray-bg">
    <TopNavigation />
    {children}
  </div>
);
const NavigationSide = props => (
  <Fragment>
    <nav className="navbar-default navbar-static-side " role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav metismenu" id="side-menu">
          {props.children}
        </ul>
      </div>
    </nav>
  </Fragment>
);

const NavigationHead = ({ image_src, name }) => (
  <li className="nav-header">
    <div className="dropdown profile-element">
      <span>
        <img alt="" className="img-circle" id="user_profile_image" src={image_src} />
      </span>
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        <span className="clear">
          <span className="block m-t-xs">
            <strong id="user_profile_name" className="font-bold">
              {name}
            </strong>
          </span>
          <span className="text-muted text-xs block">{/*<b className="caret"></b>*/}</span>
        </span>
      </a>
      <ul className="dropdown-menu animated fadeInRight m-t-xs">
        <li>
          <a href="https://cruz.site44.com/profile.html">Profile</a>
        </li>
      </ul>
    </div>
    <div className="logo-element" />
  </li>
);

const NavigationDropdown = ({ active, children, name, url, favicon }) => (
  <li className={active || ""}>
    <a href={url}>
      <i className={favicon} /> <span className="nav-label">{name}</span> <span className="fa arrow" />
    </a>
    <ul className="nav nav-second-level collapse">{children}</ul>
  </li>
);

// const NavigationDetermineURL = ({url,name}) => (
//     {url.indexOf('https') > -1 ?<a href={url}> </a> :<NavLink to={url}>{name}</NavLink> }
// )

const NavigationDropdownItem = ({ name, active, url }) => (
  <li className={active || ""}>
    <NavLink to={url}>{name}</NavLink>
  </li>
);

const NavigationDropdownSection = ({ name, array, favicon }) => (
  <NavigationDropdown name={name} favicon={favicon}>
    {array.map((navigation_dict, num) => (
      <NavigationDropdownItem name={navigation_dict.name} url={navigation_dict.url} key={num} />
    ))}
  </NavigationDropdown>
);

//navigation array takes in {name:'Menu Item',array:[{name:'Base',url:'/Base'}],favicon:'fa fa-help'}
const NavigationLists = ({ navigation_array }) => (
  <Fragment>
    {navigation_array.map((nav_dict, num) => (
      <NavigationDropdownSection name={nav_dict.name} array={nav_dict.array} favicon={nav_dict.favicon} key={num} />
    ))}
  </Fragment>
);

//this is the key attribute of utilizing the NavigationsListsLinks instead of NavigationLists
const NavigationDropdownItemLink = ({ name, active, url }) => (
  <li className={active || ""}>
    <a target={"_blank"} href={url} className="list-group-item">
      {name}
    </a>
  </li>
);

const NavigationDropdownSectionLinks = ({ name, array, favicon }) => (
  <NavigationDropdown name={name} favicon={favicon}>
    {array.map((navigation_dict, num) => (
      <NavigationDropdownItemLink key={num} name={navigation_dict.name} url={navigation_dict.url} />
    ))}
  </NavigationDropdown>
);

//again this is different from NavigationLists in that it uses the a tag instead of the navlink attribute that comes from the other point
const NavigationListsLinks = ({ navigation_array }) => (
  <Fragment>
    {navigation_array.map((nav_dict, num) => (
      <NavigationDropdownSectionLinks key={num} name={nav_dict.name} array={nav_dict.array} favicon={nav_dict.favicon} />
    ))}
  </Fragment>
);

//this is a navigation array that is different from Navigation in that instead of using the the NavLink option, it uses the the a tag on opening the nav link option
export const NavigationLinks = ({ navigation_array, image_src, username }) => (
  <NavigationSide>
    <NavigationHead image_src={image_src} name={username} />
    <NavigationListsLinks navigation_array={navigation_array || []} />
  </NavigationSide>
);

//navigation_array
export const Navigation = ({ navigation_array, image_src, username }) => (
  <NavigationSide>
    <NavigationHead image_src={image_src} name={username} />
    <NavigationLists navigation_array={navigation_array || []} />
  </NavigationSide>
);

export const Inspinia = props => (
  <div id="wrapper" style={{ backgroundColor: "#2f4050" }}>
    <Navigation />
    <MainFrame>body</MainFrame>
  </div>
);

export const SmallChat = ({ title }) => (
  <div>
    <div className="small-chat-box fadeInRight animated">
      <div className="heading" draggable="true">
        <small className="chat-date pull-right" /> {title}
      </div>
      <div className="content" id="message_content" />
      <div className="form-chat">
        <div className="input-group input-group-sm">
          <input className="form-control" id="message_box_text" type="text" />
          <span className="input-group-btn">
            <button className="btn btn-primary" id="message_send" type="button">
              <span className="input-group-btn">
                <span className="input-group-btnX">Submit</span>
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div id="small-chat">
      <span className="badge badge-warning pull-right" id="small-chat-count" />
      <a className="open-small-chat">
        <i className="fa fa-comments" />
      </a>
    </div>
  </div>
);

const TableRowCreate = ({ array }) => {
  array.map(cell_dict => <td className={cell_dict.class_name}>{cell_dict.value}</td>);
};
export const LoginPageGoogle = ({
  title,
  children,
  footer,
  logo_name,
  content,
  onUsernameChange,
  onPasswordChange,
  onLoginSubmit,
  onLoginSubmitGoogle
}) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>{content}</p>
      <form className="m-t" role="form" action="index.html">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Username" required="" onChange={onUsernameChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="" onChange={onPasswordChange} />
        </div>
        <button type="submit" onClick={onLoginSubmit} className="btn btn-primary block full-width m-b">
          Login
        </button>
        <button type="submit" onClick={onLoginSubmitGoogle} className="btn btn-primary block full-width m-b">
          Login with Google
        </button>
        <a href="#">
          <small>Forgot password?</small>
        </a>
        <p className="text-muted text-center">
          <small>Do not have an account?</small>
        </p>
        <a className="btn btn-sm btn-white btn-block" href="register.html">
          Create an account
        </a>
      </form>
      <p className="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//Same but has two Buttons
export const LoginPageGoogleAnonymous = ({
  title,
  children,
  footer,
  logo_name,
  content,
  onUsernameChange,
  onPasswordChange,
  onLoginSubmit,
  onLoginSubmitGoogle,
  onLoginSubmitAnonymous,
  onCreateAccount
}) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>{content}</p>
      <form className="m-t" role="form" action="index.html">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Username" required="" onChange={onUsernameChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="" onChange={onPasswordChange} />
        </div>
        <button type="submit" onClick={onLoginSubmit} className="btn btn-primary block full-width m-b">
          Login
        </button>
        <button type="submit" onClick={onLoginSubmitGoogle} className="btn btn-primary block full-width m-b">
          Login with Google
        </button>
        <button type="submit" onClick={onLoginSubmitAnonymous} className="btn btn-primary block full-width m-b">
          Login Anonymously
        </button>
        {/* <a href="#">
          <small>Forgot password?</small>
        </a> */}
        <p className="text-muted text-center">
          <small>Do not have an account?</small>
        </p>
        <a className="btn btn-sm btn-white btn-block" href="register.html" onClick={onCreateAccount}>
          Create an account
        </a>
      </form>
      <p className="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//this creates a login page which needs to be within gray-bg. It's a nice UI for the login page and should be accompanied by the register page
export const LoginPage = ({ title, children, footer, logo_name, content, onUsernameChange, onPasswordChange, onLoginSubmit }) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>{content}</p>
      <form className="m-t" role="form" action="index.html">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Username" required="" onChange={onUsernameChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="" onChange={onPasswordChange} />
        </div>
        <button type="submit" onClick={onLoginSubmit} className="btn btn-primary block full-width m-b">
          Login
        </button>

        <a href="#">
          <small>Forgot password?</small>
        </a>
        <p className="text-muted text-center">
          <small>Do not have an account?</small>
        </p>
        <a className="btn btn-sm btn-white btn-block" href="register.html">
          Create an account
        </a>
      </form>
      <p className="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//Below is the register page for when a user needs to register
export const RegisterPage = ({
  title,
  children,
  footer,
  logo_name,
  content,
  onNameChange,
  onPasswordChange,
  onEmailChange,
  onRegisterSubmit
}) => (
  <div class="middle-box text-center loginscreen   animated fadeInDown">
    <div>
      <div>
        <h1 class="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      {children}
      <p>{content}</p>
      <form class="m-t" role="form" action="login.html">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" required="" onChange={onNameChange} />
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" required="" onChange={onEmailChange} />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" required="" onChange={onPasswordChange} />
        </div>
        <div class="form-group">
          <div class="checkbox i-checks">
            <label>
              {" "}
              <input type="checkbox" />
              <i /> Agree the terms and policy{" "}
            </label>
          </div>
        </div>
        <button onClick={onRegisterSubmit} type="submit" class="btn btn-primary block full-width m-b">
          Register
        </button>

        <p class="text-muted text-center">
          <small>Already have an account?</small>
        </p>
        <a class="btn btn-sm btn-white btn-block" href="login.html">
          Login
        </a>
      </form>
      <p class="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//this is the component necessary for one of the tab items
//li_class can be active to show that its active
//id - needs to be something like - tab-1
export const TabsNavTabsItem = ({ id, label, is_active }) => (
  <li className={is_active ? "active" : ""}>
    <a aria-expanded="true" data-toggle="tab" href={"#" + id}>
      {label}
    </a>
  </li>
);

//this creates the tabs at the top
// = [{id:'#tab-1',is_active:true,label:'my label'}]
export const TabsNavTabsItems = ({ array }) => (
  <Fragment>
    {array.map((cell_dict, num) => (
      <TabsNavTabsItem id={cell_dict.id} is_active={cell_dict.is_active} label={cell_dict.label} key={num} />
    ))}
  </Fragment>
);

//<ul className="nav nav-tabs">
export const TabsNavTabsContainer = ({ children }) => <ul className="nav nav-tabs">{children}</ul>;

//this creates one of the tab bodies
export const TabsPaneItem = ({ id, children, is_active }) => (
  <div className={is_active ? "tab-pane active" : "tab-pane"} id={id}>
    <div className="panel-body">{children}</div>
  </div>
);

//[{id:'tab-1',content:'content'}]
export const TabsPaneItems = ({ array }) => (
  <Fragment>
    {array.map((cell_dict, num) => (
      <TabsPaneItem id={cell_dict.id} key={num} is_active={cell_dict.is_active}>
        {cell_dict.content}
      </TabsPaneItem>
    ))}
  </Fragment>
);

export const TabsTabContentContainer = ({ children }) => <div className="tab-content">{children}</div>;

//objective below is to create tabs and this holds the tabs in it
export const TabsContainer = ({ children }) => <div className="tabs-container">{children}</div>;

//this takes in an array that needs to be structured as
//[{id:'tab-1',content:'my content',label:'my-label',is_active:true}]
export const Tabs = ({ array }) => (
  <TabsContainer>
    <TabsNavTabsContainer>
      <TabsNavTabsItems array={array} />
    </TabsNavTabsContainer>
    <TabsTabContentContainer>
      <TabsPaneItems array={array} />
    </TabsTabContentContainer>
  </TabsContainer>
);

export const ProgressBar = ({ YTD_Actuals_Pct, RunRate_Forecast_Pct, Remaining_Pct, Redline_Img }) => (
  <div className="progress" id="theprogress">
    <div className="progress-bar progress-bar-success" role="progressbar" style={{ width: YTD_Actuals_Pct, backgroundColor: "#1F497D" }}>
      Free Space
    </div>
    <div
      className="progress-bar progress-bar-warning"
      role="progressbar"
      style={{
        width: RunRate_Forecast_Pct,
        backgroundColor: "#95B3D7",
        color: "#000000"
      }}
    >
      Warning
    </div>
    <div
      className="progress-bar progress-bar-danger"
      role="progressbar"
      style={{
        width: Remaining_Pct,
        backgroundColor: "#FFF",
        color: "#000000"
      }}
    >
      Danger
    </div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Red_Red.svg/1280px-Red_Red.svg.png"
      style={{
        left: Redline_Img,
        position: "absolute",
        marginLeft: "-16px",
        width: "6%"
      }}
    />
  </div>
);

//create dropdown of options buttons
export const ButtonDropDownSelectButtons = ({ buttons }) => (
  <ul className="dropdown-menu">
    {buttons.map((button, num) => (
      <li key={num}>
        <a
          onClick={() => {
            button.func(button.label);
          }}
        >
          {button.label}
        </a>
      </li>
    ))}
  </ul>
);

//create a buttonwith a dropdown to the right of it with a list of buttons
export const ButtonDropDownSelect = ({ label, buttons, children }) => (
  <div className="input-group m-b">
    <div className={"input-group-btn "}>
      <button tabIndex="-1" className="btn btn-white" type="button">
        {label}
      </button>
      <button data-toggle="dropdown" className="btn btn-white dropdown-toggle" type="button" aria-expanded="true">
        <span className="caret" />
      </button>
      <ButtonDropDownSelectButtons buttons={buttons} />
    </div>
    {children}
  </div>
);

//same as ButtonDropDownSelect but with input box
export const ButtonDropDownSelectInput = ({ label, buttons, children }) => (
  <ButtonDropDownSelect label={label} buttons={buttons}>
    <input type="text" className="form-control" />
  </ButtonDropDownSelect>
);

export const DataTableRow = ({ id }) => (
  <div className="row">
    <div className="col-md-12">
      <IBoxContentCore title="Data">
        <table className="table table-striped table-bordered table-hover" style={{ width: "100%" }} id={id || "table"} />
      </IBoxContentCore>
    </div>
  </div>
);

//create contact box button look (used for buttons io)
export const ButtonBox = ({ title, sub_title, children, footer, onClick }) => (
  <div className="contact-box center-version">
    <a onClick={onClick}>
      {/* <img alt="image" className="img-circle" src="img/a1.jpg" /> */}
      <h3 className="m-b-xs">
        <strong>{title}</strong>
      </h3>
      <div className="font-bold">{sub_title}</div>
      {children}
    </a>
    <div className="contact-box-footer">
      <div className="m-t-xs btn-group">{footer}</div>
    </div>
  </div>
);

//make the background color gray and extend all the way to the bottom
export const BackgroundGray = ({ children }) => (
  <div style={{ height: "1000px" }} className="gray-bg">
    {children}
  </div>
);

//this is the login if the user logins with an email link
//Same but has two Buttons
export const LoginPageEmailLnk = ({ title, children, footer, logo_name, content, onUsernameChange, onLoginSubmit }) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>{content}</p>
      <form className="m-t" role="form" action="index.html">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" required="" onChange={onUsernameChange} />
        </div>
        <button type="submit" onClick={onLoginSubmit} className="btn btn-primary block full-width m-b">
          Send Email Link
        </button>
      </form>
      <p className="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//Same but has two Buttons
export const LoginPageGoogleOnly = ({
  title,
  children,
  footer,
  logo_name,
  content,
  onUsernameChange,
  onPasswordChange,
  onLoginSubmit,
  onLoginSubmitGoogle
}) => (
  <div className="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 className="logo-name">{logo_name}</h1>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>{content}</p>
      <form className="m-t" role="form" action="index.html">
        <button type="submit" onClick={onLoginSubmitGoogle} className="btn btn-primary block full-width m-b">
          Google Login
        </button>
      </form>
      <p className="m-t">
        <small>{footer}</small>
      </p>
    </div>
  </div>
);

//create ibox title component
export const iBoxTitle = () => (
  <div className="ibox-title">
    <h5>Horizontal form</h5>
    <div className="ibox-tools">
      <a className="collapse-link">
        <i className="fa fa-chevron-up" />
      </a>
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        <i className="fa fa-wrench" />
      </a>
      <ul className="dropdown-menu dropdown-user">
        <li>
          <a href="#">Config option 1</a>
        </li>
        <li>
          <a href="#">Config option 2</a>
        </li>
      </ul>
      <a className="close-link">
        <i className="fa fa-times" />
      </a>
    </div>
  </div>
);

//create basic input box from form
export const FormBasicInput = ({ title, notes }) => (
  <div className="form-group">
    <label className="col-lg-2 control-label">{title}</label>
    <div className="col-lg-10">
      <input type="text" placeholder={title} className="form-control" /> <span className="help-block m-b-none">{notes}</span>
    </div>
  </div>
);

//create basic form with basic inputs
export const FormBasic = ({ title, children, handleChange, onSubmit }) => (
  <div className="ibox float-e-margins">
    <div className="ibox-content">
      <form className="form-horizontal">
        <p>{title}</p>
        <div className="form-group">
          <label className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input type="text" placeholder="Name" name="name" className="form-control" onChange={handleChange} />
            <span className="help-block m-b-none">Example block-level help text here.</span>
          </div>
        </div>
        <div className="form-group">
          <label className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input type="email" placeholder="Email" name="email" className="form-control" onChange={handleChange} />
            <span className="help-block m-b-none">Example block-level help text here.</span>
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-offset-2 col-lg-10">
            <button className="btn btn-sm btn-white" type="submit" onClick={onSubmit}>
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

//this is the landing page wrapper so that landing page components can create appropriate
export const LandingPageWrapper = ({ children }) => (
  <div id="page-top" className="landing-page no-skin-config" style={{ color: "#676a6c", backgroundColor: "#fff" }}>
    {children}
  </div>
);

//this creates bullet sections
//array = [{title:'Full Responsive',link_name:'details',href:'#',description:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.'}]
export const LandingBulletSections = ({ array, id }) => (
  <section className="container servicesx" id={id || null}>
    <div className="row">
      {array.map((item, num) => (
        <div className="col-sm-3" key={num}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>
            <a className="navy-link" href={item.href} role="button">
              {item.link_name}
            </a>
          </p>
        </div>
      ))}
    </div>
  </section>
);

export const LandingDisplayBullet = ({ attributes }) => (
  <Fragment>
    <i className={attributes.favicon || "fa fa-bar-chart features-icon"} />
    <h2>{attributes.title || "6 Charts Library"}</h2>
    <p>
      {attributes.description ||
        "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbileo risus."}
    </p>
  </Fragment>
);
//creates the section that has the four bullets plus the title at the top
//array = [{title:'Full responsivle',description:' Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbileo risus.',favicon:'fa fa-mobile features-icon'}]
export const LandingDisplayBullets = ({ title, sub_title, sub_text, array, image_url, id }) => (
  <section className="container features" id={id || null}>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="navy-line" />
        <h1>
          {title || "Over 40+ unique view"}
          <br />
          <span className="navy">{sub_title || "with many custom components"}</span>
        </h1>
        <p>{sub_text || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 text-center wow fadeInLeft">
        <div>
          <LandingDisplayBullet attributes={array[0]} />
        </div>
        <div className="m-t-lg">
          <LandingDisplayBullet attributes={array[1]} />
        </div>
      </div>
      <div className="col-md-6 text-center wow zoomIn">
        <img alt="dashboard" className="img-responsive" src={image_url || "https://cruzco.site44.com/img/landing/perspective.png"} />
      </div>
      <div className="col-md-3 text-center wow fadeInRight">
        <div>
          <LandingDisplayBullet attributes={array[2]} />
        </div>
        <div className="m-t-lg">
          <LandingDisplayBullet attributes={array[3]} />
        </div>
      </div>
    </div>
  </section>
);

export const LandingDisplaySide = ({
  title,
  sub_title,
  description,
  section_title,
  section_sub_title,
  array,
  image_url,
  button_text,
  button_url,
  id
}) => (
  <section className="container features" id={id || null}>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="navy-line" />
        <h1>{title || "Discover great feautres"}</h1>
        <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}</p>
      </div>
    </div>
    <div className="row features-block">
      <div className="col-lg-6 features-text wow fadeInLeft">
        <small>{section_sub_title || "INSPINIA"}</small>
        <h2>{section_title || "Perfectly designed"}</h2>
        <p>
          {description ||
            "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboardtemplate built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."}
        </p>
        <a className="btn btn-primary" href={button_url || ""}>
          {button_text || "Learn more"}
        </a>
      </div>
      <div className="col-lg-6 text-right wow fadeInRight">
        <img
          alt="dashboard"
          className="img-responsive pull-right"
          src={image_url || "https://cruzco.site44.com/img/landing/dashboard.png"}
        />
      </div>
    </div>
  </section>
);

export const LandingDisplaySideReverse = ({
  title,
  sub_title,
  description,
  section_title,
  section_sub_title,
  array,
  image_url,
  button_text,
  id,
  button_url
}) => (
  <section className="container features" id={id || null}>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="navy-line" />
        <h1>{title || "Discover great feautres"}</h1>
        <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}</p>
      </div>
    </div>
    <div className="row features-block">
      <div className="col-lg-6 text-right wow fadeInRight">
        <img
          alt="dashboard"
          className="img-responsive pull-right"
          src={image_url || "https://cruzco.site44.com/img/landing/dashboard.png"}
        />
      </div>
      <div className="col-lg-6 features-text wow fadeInLeft">
        <small>{section_sub_title || "INSPINIA"}</small>
        <h2>{section_title || "Perfectly designed"}</h2>
        <p>
          {description ||
            "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboardtemplate built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."}
        </p>
        <a className="btn btn-primary" href={button_url || ""}>
          {button_text || "Learn more"}
        </a>
      </div>
    </div>
  </section>
);
//array = [{title:'title',sub_title:'sub_title',description:'description',favicon:'fa fa-bolt'}]
export const LandingFourBulletsSingle = ({ title, sub_title, description, favicon }) => (
  <Fragment>
    <small>{sub_title || "INSPINIA"}</small>
    <h2>{title || "Perfectly designed"}</h2>
    <i className={(favicon || "fa fa-bolt") + " big-icon pull-right"} />
    <p>
      {description ||
        "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with"}
    </p>
  </Fragment>
);

//create four bullet sections from array
export const LandingFourBullets = ({ title, sub_title, sub_text, array, image_url }) => (
  <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line" />
          <h1>{title || "More and more extra great feautres"}</h1>
          <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}f</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 features-text">
          <LandingFourBulletsSingle {...array[0]} />
        </div>
        <div className="col-lg-5 features-text">
          <LandingFourBulletsSingle {...array[1]} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 features-text">
          <LandingFourBulletsSingle {...array[2]} />
        </div>
        <div className="col-lg-5 features-text">
          <LandingFourBulletsSingle {...array[3]} />
        </div>
      </div>
    </div>
  </section>
);

//array = [{title:'title',sub_title:'sub_title',description:'description',favicon:'fa fa-bolt'}]
//this supports the landingunlimietedubllets
export const LandingUnlimitedBulletsSingle = ({ title, sub_title, description, favicon, image_url }) => (
  <Fragment>
    <small>{sub_title || "INSPINIA"}</small>
    <h2>
      <b>{title || "Perfectly designed"}</b>
    </h2>
    <i className={"pull-right"}>
      <img
        alt="dashboard"
        style={{ width: "150px" }}
        className="img-responsive"
        src={image_url || "https://cruzco.site44.com/img/landing/iphone.jpg"}
      />
    </i>
    <span>
      {description ||
        "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with"}
    </span>
  </Fragment>
);

//just like landing all bullets but instead its for unlimited bullets
//const bullets_array = [{ title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" }, { title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" }, { title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" }, { title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" }, { title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" }, { title: "title", sub_title: "sub_title", description: "description", favicon: "fa fa-bolt" } ];
export const LandingUnlimitedBullets = ({ title, sub_title, sub_text, array, image_url }) => (
  <section className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line" />
          <h1>{title || "More and more extra great feautres"}</h1>
          <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}f</p>
        </div>
      </div>
      {_.chunk(array, 2).map((subli, num) => (
        <div className="row" key={num}>
          <div className="col-lg-5 col-lg-offset-1 features-text">
            <LandingUnlimitedBulletsSingle {...subli[0]} />
          </div>
          <div className="col-lg-5 features-text">
            <LandingUnlimitedBulletsSingle {...subli[1]} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

//array = [{title:'title',sub_title:'sub_title',description:'description',button_text:'learn'}]
export const LandingSidesSingle = ({ title, sub_title, description, button_text, button_url }) => (
  <Fragment>
    <small>{sub_title || "INSPINIA"}</small>
    <h2>{title || "Perfectly designed"}</h2>
    <p>
      {description ||
        "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins."}
    </p>
    <a className="btn btn-primary" href={button_url || ""}>
      {button_text || "Learn More"}
    </a>
  </Fragment>
);

//create landing sides
export const LandingSides = ({ title, sub_title, sub_text, array, image_url, id }) => (
  <section className="features" id={id || null}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line" />
          <h1>{title || "Even more great feautres"}</h1>
          <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}</p>
        </div>
      </div>
      <div className="row features-block">
        <div className="col-lg-3 features-text wow fadeInLeft">
          <LandingSidesSingle {...array[0]} />
        </div>
        <div className="col-lg-6 text-right m-t-n-lg wow zoomIn">
          <img alt="dashboard" className="img-responsive" src={image_url || "https://cruzco.site44.com/img/landing/iphone.jpg"} />
        </div>
        <div className="col-lg-3 features-text text-right wow fadeInRight">
          <LandingSidesSingle {...array[1]} />
        </div>
      </div>
    </div>
  </section>
);

//array = [{title:'title',button_text:'button_text',description:'description',icon_title:'icon_title',icon_sub_title:'icon_sub_title',favicon:"fa fa-briefcase"}]
export const LandingTimeLineElement = ({ title, description, button_text, button_url, favicon, icon_title, icon_sub_title }) => (
  <div className="vertical-timeline-block">
    <div className="vertical-timeline-icon navy-bg">
      <i className={favicon || "fa fa-briefcase"} />
    </div>
    <div className="vertical-timeline-content">
      <h2>{title || "Meeting"}</h2>
      <p>
        {description ||
          "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale."}
      </p>
      <a className="btn btn-xs btn-primary" href={button_url || "#"}>
        {button_text || "More info"}
      </a>
      <span className="vertical-date">
        {icon_title || "Today"}
        <br />
        <small>{icon_sub_title || "Dec 24"}</small>
      </span>
    </div>
  </div>
);
export const LandingTimeLine = ({ title, sub_title, sub_text, array, image_url }) => (
  <section className="timeline gray-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line" />
          <h1>{title || "Our workflow"}</h1>
          <p>{sub_title || "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod."}</p>
        </div>
      </div>
      <div className="row features-block">
        <div className="col-lg-12">
          <div className="vertical-container light-timeline center-orientation" id="vertical-timeline">
            {array.map((item, num) => (
              <LandingTimeLineElement key={num} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

//create barchart js section element
export const BarChartsCanvas = ({ id }) => (
  <div className="chartjs_section" style={{ position: "relative", margin: "auto" }}>
    <canvas id={id || "id"} style={{ display: "block", width: "819" }} />
  </div>
);
