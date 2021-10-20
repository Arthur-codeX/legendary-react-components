import React from "react";

import ReactTooltip from "react-tooltip";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";

const CodeTopBar = ({ copyText, sandbox }) => {
  sandbox = sandbox || "";
  copyText = copyText || "";
  return (
    <div>
      <span
        data-tip="copy"
        className="w3-xlarge pointer w3-margin-right w3-margin-left w3-ripple w3-right w3-ripple"
        onClick={() => toast.success("Code Copied")}
      >
        <CopyToClipboard text={copyText}>
          <FaCopy />
        </CopyToClipboard>
      </span>
      <a
        data-tip="sandBox ?"
        href={sandbox}
        className="w3-xlarge pointer w3-margin-right w3-margin-left w3-ripple w3-right w3-text-blue w3-ripple"
        target="_blank"
      >
        <AiOutlineCodeSandbox />
      </a>
      <ReactTooltip />
    </div>
  );
};

export { CodeTopBar };
