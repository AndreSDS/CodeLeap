import deleteIcon from "/deleteIcon.svg";
import editIcon from "/editIcon.svg";

interface HeaderProps {
  title: string;
  addClassName?: string;
  isOwner?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const Header = ({
  title = "header Title",
  addClassName,
  isOwner = false,
  onEdit,
  onDelete,
}: HeaderProps) => {
  return (
    <header
      className={`px-6 flex items-center justify-between h-[70px] w-full bg-[#7695EC] ${addClassName}`}
    >
      <h1 className="font-bold text-[22px]/[26px] text-white truncate ...">{title}</h1>

      {isOwner && (
        <div className="flex items-center gap-7 ml-auto">
          <button onClick={onDelete}>
            <img src={deleteIcon} alt="delete icon" />
          </button>
          <button onClick={onEdit}>
            <img src={editIcon} alt="edit icon" />
          </button>
        </div>
      )}
    </header>
  );
};
