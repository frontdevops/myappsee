var data = {
	"class": "go.GraphLinksModel",
	"nodeKeyProperty": "id",
	"nodeDataArray": [
		{"id": 0, "text": "www.tutu.ru"},
		{"id": 1, "text": "avia.tutu.ru"},
		{"id": 3, "text": "bus.tutu.ru"
		},
		{"id": 4, "text": "www.tutu.ru/poezda/"},
		{"text": "tours.tutu.ru", "id": -6},
		{"text": "tours.tutu.ru/strana/turkey/", "id": -7}, {"text": "strana/turkey/?departure", "id": -8}],
	"linkDataArray": [{"from": 0, "to": 0, "text": "F5 refresh", "curviness": -20}, {
		"from": 0,
		"to": 1,
		"text": "direct link",
		"curviness": 20
	}, {"from": 1, "to": 0, "text": "redirect", "curviness": 20}, {
		"from": 1,
		"to": 1,
		"text": "F5 refresh",
		"curviness": -20
	}, {"from": 1, "to": 4, "text": "timer"}, {"from": 3, "to": 0, "text": "up\nPOST\n(dblclick\nif no move)"}, {
		"from": 3,
		"to": 3,
		"text": "down or timer",
		"curviness": 20
	}, {"from": 4, "to": 0, "text": "up\nPOST"}, {"from": 4, "to": 4, "text": "down"}, {
		"from": 3,
		"to": 1,
		"text": "banner redirect"
	},
		{"from": -6, "to": -6, "text": "F5 refresh"},
		{"from": -6, "to": -7, "text": "go"},
		{
			"from": -7,
			"to": -8,
			"text": "go"
		},
		{"from": -7, "to": 0}, {"from": -8, "to": 1}, {"from": -7, "to": 1}, {"from": 3, "to": 4}]
};