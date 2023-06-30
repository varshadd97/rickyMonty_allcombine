import Image from "next/image";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/Action/characterAction";
import { fetchEpisode } from "../store/Action/episodeAction";
import {
  props,
  charApiProps,
  episodeResponseProps,
  reducerProps,
} from "../store/types";

function rickyMonty({ data, loading, error, fetchData, fetchEpisode }: props) {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchData(currentPage);
    fetchEpisode(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchEpisode(currentPage);
    fetchData(currentPage);
  }, []);

  if (data == null || data == undefined || data?.user?.data == null) {
    return <div> Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    setCurrentPage((pre) => pre + 1);
  };

  return (
    <>
      <div className="mx-auto mt-4" style={{ width: "200px" }}>
        <input
          type="text"
          className="p-2 rounded-3"
          placeholder="Search Character"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid-container container mt-5 ">
        {data &&
          data?.user?.data[1]
            ?.slice(0, 6)
            ?.filter((val: charApiProps | any) => {
              if (val == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item: charApiProps) => {
              return (
                <div className="card" key={item.id}>
                  <div className="d-flex justify-content-start bg-secondary bg-gradient text-white check">
                    <div>
                      <Image
                        src={item?.image}
                        alt="rickymonty"
                        width={200}
                        height={200}
                        priority={true}
                      />
                    </div>
                    <div className="ps-3 pt-3 ">
                      <h2>{item?.name}</h2>
                      <div>
                        {" "}
                        <span
                          style={{
                            backgroundColor:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            height: "15",
                            width: "15",
                            borderRadius: "25px",
                            color:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            marginRight: "5px",
                          }}
                        >
                          00
                        </span>
                        status : {item?.status}
                      </div>
                      <div className="mt-2 text">Last known location : </div>
                      <div>{item?.location?.name}</div>
                      <div className="mt-2 text">First see in : </div>
                      <div>
                        {data &&
                          data?.episode?.data[1]
                            ?.slice(0, 1)
                            ?.map((itm: episodeResponseProps) => {
                              return <span key={itm.id}>{itm?.name}</span>;
                            })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="d-flex justify-content-center check">
        {error === undefined ? <div>Error Fetchning users</div> : null}
      </div>

      <div className="d-flex justify-content-center check">
        {error === undefined ? <div>Error Fetchning episode</div> : null}
      </div>

      <div className="mx-auto mt-4 " style={{ width: "200px" }}>
        <button onClick={handleClickPrevious} className="m-4 bg-light p-2">
          Previous
        </button>

        <button onClick={handleClickNext} className="bg-light p-2">
          next
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state: reducerProps | any) => {
  return {
    data: state,
    loading: state?.loading,
    error: state?.error,
  };
};

const mapDispatchToProps = {
  fetchData,
  fetchEpisode,
};

export default connect(mapStateToProps, mapDispatchToProps)(rickyMonty);
