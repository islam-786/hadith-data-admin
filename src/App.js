import React, { useState } from "react";
import TextInput from "./TextInput";

function App() {
  const [data, setData] = useState({});
  const [hadithNumber, setHadithNumber] = useState(1);
  const [hadithId, setHadithId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saveRes, setSaveRes] = useState({});

  const onDataChange = (key, value) => {
    setData((oldState) => {
      const newData = {};
      newData[key] = value;
      return { ...oldState, ...newData };
    });
  };

  const saveData = async () => {
    const formatData = {};
    formatData.advanceNumbering = data.advanceNumbering;
    formatData.main = {
      internationalNumbering: data.internationalNumbering,
      numberInBook: data.numberInBook,
      bookNumber: data.bookNumber,
      chapterNumber: data.chapterNumber,
      linkedHadiths: data.linkedHadiths,
      linkedAyahs: data.linkedHadiths,
      relatedHadiths: data.relatedHadiths,
      tags: data.tags,
    };
    formatData.arabic = {
      bookName: data.bookName,
      chapterName: data.chapterName,
      narratedBy: data.narratedBy,
      narratedByDetail: data.narratedByDetail,
      text: data.ar_text,
    };
    formatData.english = {
      bookName: data.en_bookName,
      chapterName: data.en_chapterName,
      narratedBy: data.en_narratedBy,
      text: data.en_text,
    };
    formatData.urdu = {
      bookName: data.ur_bookName,
      chapterName: data.ur_chapterName,
      narratedBy: data.ur_narratedBy,
      text: data.ur_text,
    };

    console.log(formatData);
    //https://hadithsaverapi-dot-true-islam-dev.ew.r.appspot.com/hadith
    const rawResponse = await fetch("http://localhost:5000/hadith", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formatData),
    });
    const content = await rawResponse.json();

    console.log(content);
    setSaveRes(content);
  };

  const onHadithChange = (event) => {
    setHadithNumber(event.target.value);
  };

  const loadHadithData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://hadithapi-dot-true-islam-dev.ew.r.appspot.com/" + hadithNumber
    );
    const json = await response.json();
    console.log(json);

    setHadithId(json.id);
    const res = json.result;

    setLoading(false);

    const jsonData = {};
    jsonData.internationalNumbering = res.hadithNumber;
    jsonData.numberInBook = res.numberInBook;
    jsonData.bookNumber = res.bookNumber;
    jsonData.bookName = res.bookNameArabic;
    jsonData.chapterName = res.chapterNameArabic;
    jsonData.narratedBy = res.narratedByArabic;
    jsonData.narratedByDetail = res.narratedByArabicDetail;
    jsonData.ar_text = res.textArabic;
    jsonData.en_bookName = res.bookName;
    jsonData.en_chapterName = res.chapterName;
    jsonData.en_narratedBy = res.narratedBy;
    jsonData.en_text = res.text;
    jsonData.ur_narratedBy = res.narratedByUrdu;
    jsonData.ur_text = res.textUrdu;

    setData(jsonData);
  };

  return (
    <div>
      {saveRes.main_error ? (
        <span style={{ color: "red" }}>Failed to save main</span>
      ) : (
        "Sucessfully save main"
      )}{" "}
      <br />
      {saveRes.ar_error ? (
        <span style={{ color: "red" }}>Failed to save arabic</span>
      ) : (
        "Sucessfully save arabic"
      )}{" "}
      <br />
      {saveRes.en_error ? (
        <span style={{ color: "red" }}>Failed to save English</span>
      ) : (
        "Sucessfully save english"
      )}{" "}
      <br />
      {saveRes.ur_error ? (
        <span style={{ color: "red" }}>Failed to save urdu</span>
      ) : (
        "Sucessfully save urdu"
      )}{" "}
      <br />
      {loading ? "Loading...." : null}
      <input type="text" onChange={onHadithChange} />{" "}
      <button onClick={loadHadithData}>Load Data</button>
      <div
        style={{
          width: "50%",
          float: "left",
        }}
      >
        <h4>Hadith id: {hadithId}</h4>
        <TextInput
          label="advanceNumbering"
          value={data}
          onChange={onDataChange}
        />
        <h4>Main</h4>
        <TextInput
          label="internationalNumbering"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="numberInBook" value={data} onChange={onDataChange} />
        <TextInput label="bookNumber" value={data} onChange={onDataChange} />
        <TextInput label="chapterNumber" value={data} onChange={onDataChange} />
        <TextInput
          label="bookName"
          arabic
          shortText
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          label="chapterName"
          arabic
          shortText
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          label="narratedBy"
          longText
          arabic
          height="150px"
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          longText
          arabic
          label="narratedByDetail"
          value={data}
          height="150px"
          onChange={onDataChange}
        />
        <TextInput
          label="ar_text"
          longText
          value={data}
          arabic
          onChange={onDataChange}
        />
      </div>
      <div style={{ width: "49%", float: "right", marginBottom: "100px" }}>
        <TextInput label="linkedHadiths" value={data} onChange={onDataChange} />
        <TextInput label="linkedAyahs" value={data} onChange={onDataChange} />
        <TextInput
          label="relatedHadiths"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="tags" value={data} onChange={onDataChange} />
        <h4>English</h4>
        <TextInput label="en_bookName" value={data} onChange={onDataChange} />
        <TextInput
          label="en_chapterName"
          value={data}
          onChange={onDataChange}
        />
        <TextInput label="en_narratedBy" value={data} onChange={onDataChange} />
        <TextInput
          label="en_text"
          longText
          value={data}
          onChange={onDataChange}
        />

        <h4>Urdu</h4>
        <TextInput
          label="ur_bookName"
          arabic
          shortText
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          shortText
          arabic
          label="ur_chapterName"
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          label="ur_narratedBy"
          longText
          arabic
          value={data}
          onChange={onDataChange}
        />
        <TextInput
          label="ur_text"
          arabic
          longText
          value={data}
          onChange={onDataChange}
        />
      </div>
      <button style={{ marginLeft: "100px" }} onClick={saveData}>
        Save
      </button>
    </div>
  );
}

export default App;
