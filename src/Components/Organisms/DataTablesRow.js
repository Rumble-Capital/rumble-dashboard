import React, { Component, Fragment, useEffect } from "react";
import DataTablesTable from "../Molecules/DataTablesTable";
import PropsContext from "../../PropsContext";
import DataTable from "../Atoms/DataTable";
import DataTableAsanaCompleted from "../Molecules/DataTableAsanaCompleted";
import DataTableAsanaCurrent from "../Molecules/DataTableAsanaCurrent";
import DataTableAirTableGoals from "../Molecules/DataTableAirTableGoals";
import DataTableAirTableExperiments from "../Molecules/DataTableAirTableExperiments";

const DataTablesRow = ({ toggl_list, airtable_list, asana_list }) => {
  return (
    <PropsContext.Consumer>
      {({
        airtable_expenses_list,
        toggl_list,
        airtable_toggl_list,
        asana_list,
        shopify_orders,
        shopify_events,
        shopify_customers,
        shopify_products,
        airtable_experiments_list,
        airtable_goals_list,
        refreshToggl,
        refreshAsana,
        monday_list
      }) => {
        console.log({ asana_list });
        return (
          <div class="row">
            <div className="ibox float-e-margins">
              <div className="ibox-content">
                <div className="tabs-container">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-monday-completed">
                        Completed (
                        {
                          monday_list.filter(function(D) {
                            return D.status == "Done";
                          }).length
                        }
                        )
                      </a>
                    </li>
                    <li class="active">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-monday">
                        Current (
                        {
                          monday_list.filter(function(D) {
                            return D.status != "Done";
                          }).length
                        }
                        )
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-asana-completed">
                        Completed (
                        {
                          asana_list.filter(function(D) {
                            return D.completed == true;
                          }).length
                        }
                        )
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-asana">
                        Current (
                        {
                          asana_list.filter(function(D) {
                            return D.completed != true;
                          }).length
                        }
                        )
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="false" data-toggle="tab" href="#tab-expenses">
                        Expenses ({airtable_expenses_list.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="false" data-toggle="tab" href="#tab-goals">
                        Goals ({airtable_goals_list.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="false" data-toggle="tab" href="#tab-experiments">
                        Experiments ({airtable_experiments_list.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="false" data-toggle="tab" href="#tab-toggl">
                        Toggl ({toggl_list.length})
                      </a>
                    </li>
                    {/* <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-shopify_orders">
                        Orders ({shopify_orders.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-shopify_events">
                        Events ({shopify_events.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-shopify_customers">
                        Customers ({shopify_customers.length})
                      </a>
                    </li>
                    <li class="">
                      <a aria-expanded="true" data-toggle="tab" href="#tab-shopify_products">
                        Products ({shopify_products.length})
                      </a>
                    </li> */}
                  </ul>
                  <div className="tab-content">
                    {/* <div className="tab-pane active" id="tab-8">
                    <div className="panel-body active">
                      <DataTablesTable
                        {...{
                          id: "asana_table",
                          idSrc: "gid",
                          fields: [{ name: "gid", label: "gid" }, { name: "assignee", label: "assignee" }],
                          data: asana_list
                        }}
                      />
                    </div>
                  </div> */}
                    <div className="tab-pane active" id="tab-asana-completed">
                      <div className="panel-body active">
                        <DataTableAsanaCompleted list={asana_list} />
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-asana">
                      <div className="panel-body">
                        <DataTableAsanaCurrent list={asana_list} />
                      </div>
                    </div>
                    <div className="tab-pane " id="tab-toggl">
                      <div className="panel-body">
                        <DataTable
                          {...{
                            id: "toggl_table",
                            data: toggl_list
                          }}
                        />
                      </div>
                    </div>
                    <div className="tab-pane " id="tab-experiments">
                      <div className="panel-body">
                        <DataTableAirTableExperiments list={airtable_experiments_list} />
                      </div>
                    </div>
                    <div className="tab-pane " id="tab-goals">
                      <div className="panel-body">
                        <DataTableAirTableGoals list={airtable_goals_list} />
                      </div>
                    </div>
                    <div className="tab-pane " id="tab-expenses">
                      <div className="panel-body">
                        <DataTable
                          {...{
                            id: "expenses_table",
                            data: airtable_expenses_list
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </PropsContext.Consumer>
  );
};

export default DataTablesRow;
