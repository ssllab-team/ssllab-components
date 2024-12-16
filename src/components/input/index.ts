import Text from "./_types/input";
import Search from "./_types/search";
import Textarea from "./_types/textarea";
import File from "./_types/file";
import Message from "./_types/message";
import Credit from "./_types/credit";
import Counter from "./_types/counter";

const inputBaseClass =
  "w-full px-4 py-2 bg-gray-0 rounded-lg placeholder:gray-400 text-body-16 font-regular focus-visible:outline-gray-600 border border-gray-200 focus-visible:outline-none resize-none";

const Input = {
  Text,
  Textarea,
  Search,
  File,
  Message,
  Credit,
  Counter
};

export default Input;

export { inputBaseClass };
