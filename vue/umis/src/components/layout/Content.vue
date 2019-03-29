<template>
  <div>
    <ButtonGroup size="default">
      <Button type="primary" @click="add">Small1</Button>
      <Button type="primary">Small</Button>
    </ButtonGroup>
    <Divider/>
    <Table
      border
      ref="selection"
      :columns="tableColumns1"
      :data="tableData1"
      size="small"
      :loading="loading"
      stripe
      @on-selection-change="select"
    ></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <Modal v-model="modal" draggable title="新增" @on-ok="handleSubmit('form')">
      <Form ref="form" :model="form" label-position="left" :label-width="100" :rules="ruleValidate">
        <FormItem label="Title" prop="name">
          <Input v-model="form.title"/>
        </FormItem>
        <FormItem label="email" prop="mail">
          <Input v-model="form.mail"/>
        </FormItem>
        <FormItem label="raido">
          <RadioGroup v-model="form.raido" size="small">
            <Radio label="1">金斑蝶</Radio>
            <Radio label="2" disabled>爪哇犀牛</Radio>
            <Radio label="3">印度黑羚</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="check">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="select">
          <Select v-model="form.select">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="dateTime">
          <DatePicker
            type="datetime"
            placeholder="Select date and time"
            style="width: 200px"
            :vlaue="form.date"
          ></DatePicker>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: false,
      form: {
          title:'',
          mail: ''
      },
      value6: false,
      modal: false,
      loading: false,
      tableData1: this.mockTableData1(),
      ruleValidate: {
        title: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
           {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        raido: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ]
      },
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      tableColumns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Status",
          key: "status",
          render: (h, params) => {
            const row = params.row;
            const color =
              row.status === 1
                ? "primary"
                : row.status === 2
                ? "success"
                : "error";
            const text =
              row.status === 1
                ? "Working"
                : row.status === 2
                ? "Success"
                : "Fail";

            return h(
              "Tag",
              {
                props: {
                  type: "dot",
                  color: color
                }
              },
              text
            );
          }
        },
        {
          title: "Portrayal",
          key: "portrayal",
          width: 120,
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.portrayal.length + "portrayals",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.portrayal.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.tableData1[params.index].portrayal.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "People",
          key: "people",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.people.length + "customers",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.people.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.tableData1[params.index].people.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item.n + "：" + item.c + "People"
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "Sampling Time",
          key: "time",
          render: (h, params) => {
            return h("div", "Almost" + params.row.time + "days");
          }
        },
        {
          title: "Updated Time",
          key: "update",
          render: (h, params) => {
            return h(
              "div",
              this.formatDate(this.tableData1[params.index].update)
            );
          }
        }
      ]
    };
  },
  methods: {
    add() {
      this.modal = true;
    },
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name: "Business" + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ["City", "People", "Cost", "Life", "Entertainment"],
          people: [
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        });
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.tableData1 = this.mockTableData1();
    },
    select(selection) {
      /* eslint-disable */
      console.log(selection);
    },
    handleSubmit (name) {
        console.log(name);
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('success');
            } else {
                this.$Message.error('Fail');
            }
        })
    }
  }
};
</script>