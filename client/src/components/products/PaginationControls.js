import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationControls = ({ page, currentPage, totalPages }) => {
  const prevDisabled = page > 1 ? false : true;
  const nextDisabled = page < totalPages ? false : true;

  const onPrev = () => {
    if (!prevDisabled) {
      currentPage(page - 1);
    }
  };

  const onNext = () => {
    if (!nextDisabled) {
      currentPage(page + 1);
    }
  };

  return (
    <div className='container'>
      <div className='controls'>
        <div>
          <button aria-label='Previous page' onClick={onPrev}>
            <FontAwesomeIcon icon={faChevronLeft} size='2x' />
          </button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button aria-label='Next page' onClick={onNext}>
            <FontAwesomeIcon icon={faChevronRight} size='2x' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
