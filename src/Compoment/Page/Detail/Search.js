import React, { useEffect, useState } from "react";
import CategoryProduct from "./CategoryProduct";
import { useParams } from "react-router-dom";
import usePageTitle from "../../../Features/TitlePage";

const Search = () => {
  const { slug: keyValue } = useParams();
  usePageTitle(`Tìm kiếm - ${keyValue}`);

  const [searchQuery, setSearchQuery] = useState("");
  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };


  useEffect(() => {
    setSearchQuery(removeAccents(keyValue));
  }, [keyValue]);
  return (
      <CategoryProduct search={searchQuery} />
  );
};

export default Search;