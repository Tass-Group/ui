import type React from "react";
import Icon from "./index";
import "../../assets/iconfont/iconfont.css";
import "./css/index.css";

// 定义所有的图标名称
// 定义所有的图标名称
const iconNames = [
  "EyeClosed", "upload", "user", "users", "volume", "volumehigh", "volumelow",
  "volumemedium", "warning1", "wheelchair", "alarm", "apartment", "arrowdown",
  "arrowdowncircle", "arrowleft", "arrowleftcircle", "arrowright", "arrowrightcircle",
  "arrowup", "arrowupcircle", "bicycle", "bold", "book", "bookmark", "briefcase",
  "bug", "bullhorn", "bus", "calendarfull", "camera", "cloudupload", "cameravideo",
  "car", "cart", "chartbars", "chevrondowncircle", "chevronleftcircle", "chevronrightcircle",
  "chevronupcircle", "circleminus", "clock", "cloud", "cloudcheck", "clouddownload",
  "cloudsync", "exit", "coffeecup", "construction", "crop", "database", "diamond",
  "dice", "dinner", "directionltr", "directionrtl", "drop", "earth", "enter",
  "enterdown", "envelope", "indentdecrease", "exitup", "eye", "fileadd", "fileempty",
  "filmplay", "flag", "framecontract", "frameexpand", "funnel", "gift", "graduationhat",
  "hand", "heart", "heartpulse", "highlight", "history", "hourglass", "inbox",
  "menu", "indentincrease", "italic", "keyboard", "laptop", "laptopphone", "layers",
  "leaf", "license", "lighter", "linearicons", "linespacing", "link", "list",
  "location", "magicwand", "map", "mapmarker", "pointerright", "menucircle", "mic",
  "moon", "move", "musicnote", "mustache", "neutral", "pagebreak", "paperclip",
  "paw", "pencil", "phone", "phonehandset", "picture", "piechart", "pilcrow",
  "pointerdown", "pointerleft", "starhalf", "pointerup", "poop", "powerswitch", "printer",
  "questioncircle", "redo", "rocket", "sad", "screen", "select", "shirt",
  "smartphone", "smile", "sortalphaasc", "sortamountasc", "spellcheck", "star",
  "starempty", "unlink", "store", "strikethrough", "sun", "sync", "tablet",
  "tag", "textaligncenter", "textalignleft", "textalignright", "textformat", "textformatremove",
  "textsize", "train", "underline", "undo", "danger", "warning", "success",
  "info", "bubble", "chevrondown", "chevronleft", "chevronright", "chevronup", "code",
  "cog", "cross", "download", "home", "lock", "magnifier", "pluscircle",
  "pushpin", "textalignjustify", "thumbsdown", "thumbsup", "trash"
];

const IconLabelPage: React.FC = () => {
  return (
    <div className="icon-grid-container">
      <h1>All Icons</h1>
      <div className="icon-grid">
        {iconNames.map((name) => (
          <div key={name} className="icon-grid-item">
            <Icon name={name} size={24} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconLabelPage;
