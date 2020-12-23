import React, { Fragment, useEffect, useState } from "react";
import ChartHook from "../Atoms/ChartHook";
import DataTable from "../Atoms/DataTable";
function date_render(data, type, row, meta) {
  return moment(data).format("MM/DD/YY hh:mmA (dd)");
}

function url_render(data, type, row, meta) {
  const gid = row.id;
  const url = `https://airtable.com/tblTF8ZhwnjH6nzcQ/viwRmAoOsXQle7kSU/${gid}?blocks=hide`;
  return `<a target='_blank' href='${url}'>${data}</a> `;
}
function columns_create() {
  return [
    {
      data: "Name",
      name: "Name",
      title: "name",
      label: "name",
      visible: true,
      render: url_render
    },
    {
      data: "Date",
      name: "Date",
      title: "Date",
      label: "Date",
      visible: true,
      render: date_render
    },
    {
      data: "Notes",
      name: "Notes",
      title: "Notes",
      label: "Notes",
      visible: true
    },
    {
      data: "Complete",
      name: "Complete",
      title: "Complete",
      label: "Complete",
      visible: true
    },
    {
      data: "id",
      name: "id",
      title: "id",
      label: "id",
      visible: false
    }
  ];
}

const DataTableAirTableGoals = ({ list }) => {
  console.log({ list });
  return (
    <DataTable
      {...{
        id: "airtable_goals_table",
        columns: columns_create(),
        data: list
      }}
    />
  );
};

export default DataTableAirTableGoals;
