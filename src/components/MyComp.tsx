import React from "react";
import { array } from "prop-types";

type MyCompType = {
  name: string;
  gender: "M" | "F";
  isMarried?: boolean;
  [key: string]: any;
};

type Person = {
  firstName: string;
  lastName: string;
};

const person: Person = {
  firstName: "john",
  lastName: "doe"
};

function isOld(age:number) :boolean{
    return (age>60) ? true : false;
}

const arry: number[] = [];

arry.push(2);
arry.push(1);



function MyComp({ name, gender, flexible, whatever }: MyCompType) {
  return (
    <>
      <div>{name}</div>
      <div>{gender}</div>
      <div>{flexible}</div>
      <div>{whatever}</div>
    </>
  );
}

export default MyComp;
