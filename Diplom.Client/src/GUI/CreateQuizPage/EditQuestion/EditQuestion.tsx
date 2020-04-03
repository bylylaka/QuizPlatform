import React, { FunctionComponent, useState, useEffect } from "react";
import { IEditQuestionProps, IEditQuestionCallProps } from "./props";
import createStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Field, FieldArray } from "redux-form";
import Card from "@material-ui/core/Card";
import customTextField from "../../shared/Form/Fields/CustomTextField";
import customSelectField from "../../shared/Form/Fields/CustomSelectField";
import QuestionType from "../../../shared/models/quiz/QuestionType";
import Question from "../../../shared/models/quiz/Question";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditOptions from "./EditOpions/EditOptions";

export const EditQuestion: FunctionComponent<IEditQuestionProps &
  IEditQuestionCallProps> = props => {
  const { fieldPrefix, question, fields, index } = props;

  const classes = createStyles();

  const [oldType, setOldType] = useState(QuestionType.Checkbox);

  useEffect(() => {
    if (!question || !question.type) {
      return;
    }
    if (oldType == QuestionType.Select) {
      question.options = undefined;
    }
    setOldType((question as Question).type as QuestionType);
  }, [question && question.type]);

  const renderOptionalFields = () => {
    if (question && question.type == QuestionType.Select) {
      return (
        <FieldArray name={`${fieldPrefix}.options`} component={EditOptions} />
      );
    }
  };

  const removeQuestion = () => {
    fields.remove(index);
  };

  return (
    <Grid container alignItems="center">
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field
              required
              name={`${fieldPrefix}.title`}
              label="Формулировка вопроса"
              fullWidth
              component={customTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              name={`${fieldPrefix}.type`}
              label="Тип поля"
              fullWidth
              component={customSelectField}
              parse={(value: string) => (value ? Number(value) : 0)}
            >
              <option value={QuestionType.Text}>Текстовое поле</option>
              <option value={QuestionType.Select}>Список</option>
              <option value={QuestionType.Checkbox}>Чекбокс</option>
              <option value={QuestionType.Date}>Дата</option>
              <option value={QuestionType.File}>Файл</option>
            </Field>
          </Grid>
          {renderOptionalFields()}
        </Grid>
      </Card>
      <IconButton className={classes.removeIcon} onClick={removeQuestion}>
        <DeleteIcon color="secondary" />
      </IconButton>
    </Grid>
  );
};

export default EditQuestion;
