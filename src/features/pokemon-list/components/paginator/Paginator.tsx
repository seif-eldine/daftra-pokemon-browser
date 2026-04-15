import styles from "./Paginator.module.scss";

interface PaginatorProps {
    currentPage: number;
    totalCount: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Paginator = ({
    currentPage,
    totalCount,
    itemsPerPage,
    onPageChange,
}: PaginatorProps) => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    const generatePageNumbers = () => {
        const pages: (number | string)[] = [];

        const start = Math.max(currentPage - 2, 1);
        const end = Math.min(currentPage + 2, totalPages);

        if (start > 1) {
            pages.push(1);
            if (start > 2) pages.push("...");
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages) {
            if (end < totalPages - 1) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className={styles.paginatorContainer}>
            <div className={styles.paginator}>
                <button
                    className={styles.navButton}
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    {'<'} Previous
                </button>

                <div className={styles.pageNumbers}>
                    {pageNumbers.map((page, index) => {
                        if (page === "...") {
                            return (
                                <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                                    ...
                                </span>
                            );
                        }

                        return (
                            <button
                                key={page}
                                className={`${styles.pageButton} ${currentPage === page ? styles.active : ""
                                    }`}
                                onClick={() => onPageChange(page as number)}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>

                <button
                    className={styles.navButton}
                    onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next {'>'}
                </button>
            </div>
            <p className={`${styles.pageInfo}`}>
                Page {currentPage} of {totalPages} ({itemsPerPage} Pokemon shown)
            </p>
        </div>
    );
};

export default Paginator;
