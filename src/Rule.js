import { useEffect, useState } from "react";
// import "./styles.css";
// import jsonLogic from "json-logic-js";
import { Engine } from "json-rules-engine";
// import data from "./data.json";
// import { Checkbox } from "@material-ui/core";
export default function CheckboxDemo() {
  let [checked, setChecked] = useState(false);
  let [disabled, setDisabled] = useState(false);
  // isRestoreToCustomFolder is permission to create new folder and restore.
  // isRestoreWithOverWrite is permission to restore in existing folder.
  const facts = { isRestoreToCustomFolder: 1, isRestoreWithOverwrite: 1 };
  /**
   * Setup a new engine
   */
  let engine = new Engine();
  let rules = [
    {
      conditions: {
        all: [
          {
            fact: "isRestoreToCustomFolder",
            operator: "equal",
            value: 0
          },
          {
            fact: "isRestoreWithOverwrite",
            operator: "equal",
            value: 1
          }
        ]
      },
      event: {
        type: "overwrite_permission",
        params: {
          checkBoxConditions: [false, true]
        }
      }
    },
    {
      conditions: {
        all: [
          {
            fact: "isRestoreToCustomFolder",
            operator: "equal",
            value: 1
          },
          {
            fact: "isRestoreWithOverwrite",
            operator: "equal",
            value: 0
          }
        ]
      },
      event: {
        type: "newfolder_permission",
        params: {
          checkBoxConditions: [true, true]
        }
      }
    },
    {
      conditions: {
        all: [
          {
            fact: "isRestoreToCustomFolder",
            operator: "equal",
            value: 1
          },
          {
            fact: "isRestoreWithOverwrite",
            operator: "equal",
            value: 1
          }
        ]
      },
      event: {
        type: "overwrite_newfolder_permission",
        params: {
          checkBoxConditions: [true, false]
        }
      }
    }
  ];

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    rules.forEach((rule) => {
      engine.addRule(rule);
    });
    // Run the engine to evaluate
    engine.run(facts).then(({ events }) => {
      events.forEach((event) => {
        setChecked(event.params.checkBoxConditions[0]);
        setDisabled(event.params.checkBoxConditions[1]);
      });
    });
  }, []);

  /** Json Logic Implementation Start */
  // let rules = {
  //   if: [
  //     {
  //       and: [
  //         { "===": [{ var: "isRestoreToCustomFolder" }, 0] },
  //         { "===": [{ var: "isRestoreWithOverwrite" }, 0] }
  //       ]
  //     },
  //     [],
  //     {
  //       and: [
  //         { "===": [{ var: "isRestoreToCustomFolder" }, 0] },
  //         { "===": [{ var: "isRestoreWithOverwrite" }, 1] }
  //       ]
  //     },
  //     [false, true],
  //     {
  //       and: [
  //         { "===": [{ var: "isRestoreToCustomFolder" }, 1] },
  //         { "===": [{ var: "isRestoreWithOverwrite" }, 0] }
  //       ]
  //     },
  //     [true, true],
  //     {
  //       and: [
  //         { "===": [{ var: "isRestoreToCustomFolder" }, 1] },
  //         { "===": [{ var: "isRestoreWithOverwrite" }, 1] }
  //       ]
  //     },
  //     [true, false],
  //     [true, true]
  //   ]
  // };
  // var answers = jsonLogic.apply(rules, data);
  // console.log(answers);
  // var [checked, setChecked] = useState(answers[0]);
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  /** Json logic end */
  return (
    <div className="App">
      <h1>Hello CodeSandBox!</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Checkbox
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        color="primary"
      /> */}
    </div>
  );
}
