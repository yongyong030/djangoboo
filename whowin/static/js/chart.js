document.addEventListener('DOMContentLoaded', function() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
  
    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        selectedMode: false
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '70%'],
          startAngle: 180,
          label: {
            show: true,
            formatter(param) {
              return param.name + ' (' + param.percent * 2 + '%)';
            }
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
            {
              value: 1048 + 735 + 580 + 484 + 300,
              itemStyle: {
                color: 'none',
                decal: {
                  symbol: 'none'
                }
              },
              label: {
                show: false
              }
            }
          ]
        }
      ]
    };
  
    option && myChart.setOption(option);
  });
  