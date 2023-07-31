import DetailedSearchForm from "../detailedSearchForm";
import CloseIcon from "@mui/icons-material/Close";
const SearchModal = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen my-10 bg-[#7f7f7f] bg-opacity-50 flex items-center justify-center ">
        <div className="bg-white rounded-md px-2 overflow-y-auto w-3/4">
          <div className=" sticky  bg-white flex justify-between items-center px-2 py-2 border-b-2">
            <span className="text-2xl">Detaylı arama</span>
            <CloseIcon className="text-[#7f7f7f]" fontSize="large" />
          </div>
          <div style={{ maxHeight: "62vh", overflowY: "auto" }}>
            <DetailedSearchForm />
          </div>
          <div className=" sticky flex justify-end bg-white  px-2 py-3 border-t-2">
            <button className="bg-orange-400 text-white rounded-md px-2 py-2">
              Kaydet ve kapat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
